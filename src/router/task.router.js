import { Router } from "express";
import performAuthorization from "../middleware/auth.middeware.js";
import { createTaskController, deleteTaskByIdController, downloadInvoicePDF, getTaskController, getTasksController, updateTaskController } from "../controllers/task.controller.js";

 
 const taskRouter = Router();
 
 taskRouter.post("/", performAuthorization, createTaskController);
 taskRouter.get("/", performAuthorization, getTasksController);
 taskRouter.get("/dowloadTask", performAuthorization,downloadInvoicePDF);
 taskRouter.get("/:id", performAuthorization, getTaskController);
 taskRouter.put("/:id", performAuthorization, updateTaskController);
 taskRouter.delete("/:id", performAuthorization, deleteTaskByIdController);
 
 export default taskRouter;