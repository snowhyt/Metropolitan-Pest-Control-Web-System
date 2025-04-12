import Employee from "../models/employee.model.js"
import jwt from "jsonwebtoken";

export const protectRoute = async(req, res, next) =>{

    try {
        const token = req.cookies.jwt;


        if (!token){
            return res.status(401).json({message: "Unauthorized - No Token"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded){
            return res.status(401).json({message: "Unauthorized -Token is Invalid"});
        }

        const employee = await Employee.findById(decoded.employeeId).select("-password");

        if(!employee){
            return res.status(401).json({message: "Unauthorized - Employee not found"});
        }

        req.employee = employee;
        next();


    } catch (error) {
        console.error("Error in protectRoute middleware:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

}