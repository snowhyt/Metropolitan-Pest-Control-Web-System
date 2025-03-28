import express from "express";
import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({

    phone:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    targetDate:{
        type: Date,
        required: true
    },
    transactionStatus:{
        type: String,
        required: true,
        default: "pending"
    }



    },

    {timestamps: true}

);

const Transaction = mongoose.model("Transaction",transactionModel);

export default Transaction;