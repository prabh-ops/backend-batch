import express from "express";
import userRouter from "./router/user.router.js";
import postRouter from "./router/post.router.js";



const app = express()

app.use(express.json())

app.use("/user",userRouter)

app.use("/post",postRouter)



 export default app;
