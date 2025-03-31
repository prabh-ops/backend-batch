import express from "express";
const IndexRouter = express.Router();

import authRouter from "./auth.router.js";
import userRouter from "./user.router.js";
import postRouter from "./post.router.js";
import commentRouter from "./comments.router.js";
import likeRouter from "./likes.router.js";
import followerRouter from "./follower.router.js";
import viewRouter from "./views.router.js";

IndexRouter.use("/auth", authRouter);
IndexRouter.use("/user", userRouter);   
IndexRouter.use("/post", postRouter);
IndexRouter.use("/comments", commentRouter);

IndexRouter.use("/likes", likeRouter);
IndexRouter.use("/follower", followerRouter);   
IndexRouter.use("/view", viewRouter);




export default IndexRouter;