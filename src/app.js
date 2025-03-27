import express from "express";
import userRouter from "./router/user.router.js";
import postRouter from "./router/post.router.js";
import commentRouter from "./router/comments.router.js";
import likeRouter from "./router/likes.router.js";
import followerRouter from "./router/follower.router.js";

const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/comments", commentRouter);
app.use("/post", postRouter);
app.use("/post", likeRouter);
app.use("/user", followerRouter);

export default app;
