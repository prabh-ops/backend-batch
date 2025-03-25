import { Router } from "express";
import { createPostController, deletePostController, getPostController, getPostsController, updatePostController } from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.post("/",createPostController)
postRouter.get("/",getPostsController)
postRouter.get("/:id",getPostController)
postRouter.put("/:id",updatePostController)
postRouter.delete("/:id",deletePostController)



 
export default postRouter