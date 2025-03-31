import express from "express";
import userRouter from "./router/user.router.js";
import postRouter from "./router/post.router.js";
import commentRouter from "./router/comments.router.js";
import likeRouter from "./router/likes.router.js";
import followerRouter from "./router/follower.router.js";
import viewRouter from "./router/views.router.js";
import authRouter from "./router/auth.router.js";
import IndexRouter from "./router/index.js";
import swaggerUI   from "swagger-ui-express";
import swaggerSpec from "./utils/swagger.js";
const app = express();

app.use(express.json());

app.use('/',IndexRouter)


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
export default app;
