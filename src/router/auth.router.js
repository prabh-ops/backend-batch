import { Router } from "express";
 import {
   forgotPasswordController,
   resetPasswordController,
   signInController,
   signUpController,
 } from "../controllers/auth.controller.js";
 
 const authRouter = Router();
 
 authRouter.post("/sign-up", signUpController);
 authRouter.post("/sign-in", signInController);
 authRouter.post("/forgot-password", forgotPasswordController);
 authRouter.post("/reset-password", resetPasswordController);
 
 export default authRouter;