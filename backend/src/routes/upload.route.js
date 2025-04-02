import express from "express";
import multer from 'multer';
import {v2 as cloudinary} from 'cloudinary';
import {CloduiaryStorae} from 'multer-storage-cloudinary';

const router = express.Router();


//Configure cloudinary stoarage for mlter
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder: 'profile-pictures', //optional: store image in a specific folder
        allowedFormats: ['jpg', 'jpeg',' 'png'],
        
    }
})