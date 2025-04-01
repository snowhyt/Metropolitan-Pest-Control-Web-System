import { generateToken } from "../libs/utils.js";
import Employee from "../models/employee.model.js";
import bcrypt from "bcryptjs";


//signup controller
export const Signup = async (req, res) => {


    const {fullname, email, password, role, phone, profilePic} = req.body;
 try {
    //checking password length
    if(password.length < 6){ 
        return res.status(400).json({message: "Password must be atleast 6 characters"});
    }
    //find if user exist for duplication isues
    const employee = await Employee.findOne({email});
    if(employee){
        return res.status(400).json({message: "employee already exists"});
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //for new employee
   const newEmployee = new employee(
        {
            fullname,
            email,
            password: hashedPassword,
            role,
            phone,
            profilePic,

        }
    );

    //for saving info in the database
    if(newEmployee){
        //generate jwt token
        generateToken(newEmployee._id, res);
        await newEmployee.save();
        
        return res.status(201).json({
            _id: newEmployee._id,
            fullname: newEmployee.fullname,
            email:newEmployee.email,
            role: newEmployee.role,
            phone: newEmployee.phone,
            profilePic: newEmployee.profilePic,
        
        })
    } else{
        res.status(400).json({message: "Invalid employee data"});
    }

 } catch (error) {

    console.log("Error in Signup controller", error.message);
    res.status(500).json({message: "Internal server error"});
    
 }
};


export const Login = (req, res) => {
    res.send("Login Route");
   };



export const Logout = (req, res) => {
    res.send("Logout Route");
   };
   