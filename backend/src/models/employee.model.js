import express from "express";
import mongoose from "mongoose";



const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
        minlength: 6
    },
    role:{
        type:String,
        required:true,
        default:"user"
    },
    phone:{
        type:String,
        required:true,
        maxlength: 11,
    }, 
},
{timestamps: true}

);


const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;

