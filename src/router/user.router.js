import { Router } from "express";
import {
  deleteUsercontroller,
  getUsercontroller,
  getUserscontroller,
  updateUsercontroller,
} from "../controllers/user.Controller.js";
const userRouter = Router();
userRouter.get("/", getUserscontroller);
userRouter.put("/:id", updateUsercontroller);
userRouter.delete("/:id", deleteUsercontroller);
userRouter.get("/:id", getUsercontroller);

export default userRouter;
