import Employee from "../models/employee.model.js"
import jwt from "jsonwebtoken";

export const protectRoute = async(req, res, next) =>{

    try {
        const token = res.cookies.jwt;


        if (!token){
            return res.status(401).json({message: "Unauthorized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded){
            return res.status(401).json({message: "Unauthorized -Token is Invalid"});
        }

        const employee = await Employee.findById(decoded,employee_Id).select("-password");

        if(!employee){
            return res.status(401).json({message: "Unauthorized - Employee not found"});
        }

        req.employee = employee;
        next();


    } catch (error) {
        
    }

}