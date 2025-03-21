import { Router } from "express";
import { createPostController, deletePostController, getPostController, getPostsController, updatePostController } from "../controller/post.controller.js";

const postRouter = Router();

postRouter.post("/",createPostController)
postRouter.get("/",getPostsController)
postRouter.get("/",getPostController)
postRouter.put("/:id",updatePostController)
postRouter.delete("/:id",deletePostController)



 
export default postRouter