import { verifyToken } from "../utils/auth.utils.js";

 
 export const performAuthorization = (req, res, next) => {
   const authHeader = req.headers.auth
   console.log('auth :>> ', authHeader);
   if (!authHeader) {
     res.status(403).send({
       message: "Token is missing in the authorization header",
     });
   }
   const data = verifyToken(authHeader);
   if (!data) {
     res.status(403).send({
       message: "Token is either expired or invalid",
     });

   }
    req.auth = data
   
   next();
 };