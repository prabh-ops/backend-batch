import { Router } from "express";
import { addCommentController, deleteCommentController, getCommentsByPostIdController, getCommentsController, updateCommentController } from "../controller/comment.controller.js";

const commentRouter = Router();


commentRouter.post("/:postId", addCommentController);


commentRouter.get("/", getCommentsController);


commentRouter.get("/post/:postId", getCommentsByPostIdController);


commentRouter.put("/:id", updateCommentController);

commentRouter.delete("/:id", deleteCommentController);

export default commentRouter;