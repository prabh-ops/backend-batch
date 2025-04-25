import { Router } from "express";
import { dasboardController, forgotPasswordPageController, renderHome, resetPasswordPageController, signInPageController, signUpPageController } from "../controllers/view.controller.js";
import performAuthorization from "../middleware/auth.middeware.js";


const viewRenderRouter = Router();

viewRenderRouter.get("/",renderHome);
viewRenderRouter.get("/reset-password", resetPasswordPageController);
viewRenderRouter.get("/forgot-password", forgotPasswordPageController);
viewRenderRouter.get("/sign-up",signUpPageController)
viewRenderRouter.get("/sign-in",signInPageController)
viewRenderRouter.get("/dashboard",performAuthorization,dasboardController)



export default viewRenderRouter;
