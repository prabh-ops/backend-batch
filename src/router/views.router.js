import{ Router } from "express";
import { getViewCount, viewPost } from "../controllers/views.controller.js";

const viewRouter = Router();

viewRouter.post("/:postId", viewPost);
viewRouter.get("/:postId", getViewCount);

export default viewRouter;

