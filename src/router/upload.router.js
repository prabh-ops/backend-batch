import multer from "multer";
import {
  getuploadFileController,
  uploadController,
} from "../controllers/upload.controller.js";
import { Router } from "express";
const upload = multer({
  storage: multer.diskStorage({
    destination: "E:/backend-batch/src/uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname.replaceAll(" ", "-"));
    },
  }),
});

const uploadRouter = Router();

uploadRouter.post("/", upload.single("yoyo"), uploadController);
uploadRouter.get("/", getuploadFileController);
export default uploadRouter;
