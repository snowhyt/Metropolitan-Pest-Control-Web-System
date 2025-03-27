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
        required:true
    },
    role:{
        type:String,
        required:true,
        default:"user"
    },
    phone:{
        type:String,
        required:true
    },
    _createdAt: {
        type: String,
        required: true
    },
    _updatedAt: {
        type: String,
        required: true
    },
    _id:{}
})