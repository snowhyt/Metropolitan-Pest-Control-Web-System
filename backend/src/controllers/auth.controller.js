import { generateToken } from "../libs/utils.js";
import Employee from "../models/employee.model.js";
import bcrypt from "bcryptjs";


//signup controller
export const Signup = async (req, res) => {


    const {fullname, email, password, role, phone, profilePic} = req.body;
 try {


    //check if fields have data
    if(!fullname || !email || !password || !role || !phone){
        return res.status(400).json({message: "All fields are required"});
    }
    //accepts admin and staff only
    if(role !== "admin" && role !== "staff"){
        return res.status(400).json({message: "Role must be either admin or staff"});
    }

    //phone number only 11 digits
    if(phone.length !== 11){
        return res.status(400).json({message:"Phone must be eleven digits"});
    }
    
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
   const newEmployee = new Employee(
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
            emp_Id: newEmployee.emp_Id,
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


export const Login = async (req, res) => {
   const {emp_Id, password} = req.body;

   try {
    if(!emp_Id || !password){
        return res.status(400).json({message: "All fields are required"});    
   }
   const employee = await Employee.findOne({emp_Id});
   
   if(!employee){
    return res.status(400).json({message: "Employee does not exist"});
   }

   const isPasswordCorrect = await bcrypt.compare(password, employee.password);

   if(!isPasswordCorrect){
    return res.status(400).json({message: "Incorrect password"});
    
   }

   generateToken(employee._id, res);
   
   res.status(200).json({
    _id:employee._id,
    fullname: employee.fullname,
    emp_Id: employee.emp_Id,
    email: employee.email,
    role: employee.role,
    phone: employee.phone,
    profilePic: employee.profilePic,
   })
   } catch (error) {
    console.log("Error in Login controller", error.message);
    res.status(500).json({message: "Internal server error"});
   }

   };



export const Logout = (req, res) => {
    try {
        res.cookie("jwt", "",{maxAge:0});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        console.log("Error in Logout controller", error.message);
        res.status(500).json({message: "Internal server error"});
        
    }
   };
   
export const updateProfile = (req, res) => {
    res.send("Update Profile Route");
   };