import { Router } from "express";
import {
  addCommentController,
  deleteCommentByPostController,
  deleteCommentController,
  getCommentsByPostIdController,
  getCommentsByUserController,
  updateCommentController,
} from "../controllers/comment.controller.js";

const commentRouter = Router();

commentRouter.post("/:postId", addCommentController);
commentRouter.get("/:userId", getCommentsByUserController);
commentRouter.get("/:postId", getCommentsByPostIdController);
commentRouter.put("/:id", updateCommentController);
commentRouter.delete("/?", deleteCommentByPostController);
commentRouter.delete("/:id", deleteCommentController);

export default commentRouter;
