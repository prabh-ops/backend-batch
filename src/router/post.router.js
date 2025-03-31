import { Router } from "express";
import { createPostController, deletePostController} from "../controllers/post.controller.js";
import { performAuthorization } from "../middleware/auth.middeware.js";

const postRouter = Router();

postRouter.post("/",performAuthorization,createPostController)
// postRouter.get("/",getPostsController)
// postRouter.get("/:id",getPostController)
// postRouter.put("/:id",updatePostController)
postRouter.delete("/:id",deletePostController)



 
export default postRouter