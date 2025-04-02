import express from "express";
import { Signup, Login, Logout, updateProfile} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlerwares/auth.middleware.js";

const router = express.Router();



//router simplified
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/update-profile", protectRoute, updateProfile);




export default router;