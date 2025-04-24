import { Router } from "express";
import { dasboardController, forgotPasswordPageController, renderHome, resetPasswordPageController, signInPageController, signUpPageController } from "../controllers/view.controller.js";


const viewRenderRouter = Router();

viewRenderRouter.get("/",renderHome);
viewRenderRouter.get("/reset-password", resetPasswordPageController);
viewRenderRouter.get("/forgot-password", forgotPasswordPageController);
viewRenderRouter.get("/sign-up",signUpPageController)
viewRenderRouter.get("/sign-in",signInPageController)
viewRenderRouter.get("/dasboard",dasboardController)


export default viewRenderRouter;
