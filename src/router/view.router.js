import { Router } from "express";
import { forgotPasswordPageController, renderHome, resetPasswordPageController } from "../controllers/view.controller.js";


const viewRenderRouter = Router();

viewRenderRouter.get("/",renderHome);
viewRenderRouter.get("/reset-password", resetPasswordPageController);
viewRenderRouter.get("/forgot-password", forgotPasswordPageController);


export default viewRenderRouter;
