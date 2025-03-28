import express from "express";
import mongoose from "mongoose";



const customerSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },

        MI:{
            type: CharracterData, //di ko alam if tama
            required: true,
        },

        lastname:{
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
            maxlength: 11,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
            minlength: 6
        },
        
    },
    {timestamps: true}
);

const Customer = mongoose.model("Customer",customerSchema);

export default Customer;