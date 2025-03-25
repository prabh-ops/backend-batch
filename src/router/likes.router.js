import express from "express";
import {
  addLikeController,
  removeLikeController,
} from "../controller/likes.controller.js";

const likeRouter = express.Router();

likeRouter.post("/addlike/?", addLikeController);
likeRouter.post("/removelike/?", removeLikeController);

export default likeRouter;
