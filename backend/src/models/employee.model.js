import express from "express";
import mongoose from "mongoose";
import {customAlphabet} from 'nanoid';


const nanoid = customAlphabet('0123456789', 6);
const employeeSchema = new mongoose.Schema({
    emp_Id:{
        type: String,
        required: true,
        unique: true,
        default: () => `EMP-${nanoid()}`
    },
    
    fullname:{
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

    profilePic:{
        type: String,
    }
},
{timestamps: true}

);


const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;

