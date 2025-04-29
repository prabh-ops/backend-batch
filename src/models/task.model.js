import mongoose from "mongoose";
 
 const taskSchema = new mongoose.Schema(
   {
     name: {
       type: String,
       required: true,
     },
     createdBy: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "newUser",
     },
     priority: {
       type: String,
       enum: ["low", "medium", "high", "urgent"],
       required: true,
       default: "medium",
     },
     status: {
       type: String,
       enum: [
         "DRAFT",
         "ONGOING",
         "COMPLETED",
         "INACTIVE",
         "REJECTED",
         "ARCHIVED",
       ],
       default: "DRAFT",
     },
     dueDate: {
       type: Date,
     },
     assignedTo: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "newUser",
     },
   },
   {
     timestamps: true,
   }
 );
 
 const TasksModel = mongoose.model("Tasks", taskSchema);
 
 export default TasksModel;