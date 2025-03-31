import { signIn, signUp } from "../services/auth.service.js";

 
 export const signUpController = async (req, res) => {
   try {
     const user = await signUp(req.body);
     res.send(user);
   } catch (error) {
     res.status(500).json(error);
   }

 };
 
 export const signInController = async (req, res) => {
  
   try {
     const user = await signIn(req.body);
     res.send(user);
   } catch (error) {
     res.status(401).json({
       message: error.message,
     });
   }
 
 };