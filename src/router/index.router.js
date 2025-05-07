import express from "express";
import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";
import postRouter from "./post.router.js";
import commentRouter from "./comments.router.js";
import likeRouter from "./likes.router.js";
import followerRouter from "./follower.router.js";
import viewRouter from "./views.router.js";
import uploadRouter from "./upload.router.js";
import viewRenderRouter from "./view.router.js";
import taskRouter from "./task.router.js";

const IndexRouter = express.Router();
IndexRouter.use("/", viewRenderRouter);
IndexRouter.use("/api/auth", authRouter);
IndexRouter.use("/api/user", userRouter);
IndexRouter.use("/api/post", postRouter);
IndexRouter.use("/api/comments", commentRouter);
IndexRouter.use("/api/upload", uploadRouter);
IndexRouter.use("/api/likes", likeRouter);
IndexRouter.use("/api/follower", followerRouter);
IndexRouter.use("/api/view", viewRouter);
IndexRouter.use("/api/tasks", taskRouter)

export default IndexRouter;
