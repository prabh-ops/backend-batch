import TasksModel from "../models/task.model.js";


 
 export const createTask = async (taskDetails) => {
   const task = new TasksModel(taskDetails);
   return await task.save();
 };
 
 export const fetchAllTasks = async () => {
   const tasks = await TasksModel.find().populate("createdBy", "-password").lean()
   return tasks;
 };
 
 export const updateTaskById = async (id, dataToBeUpdated) => {
   const updatedTask = await TasksModel.findByIdAndUpdate(id, dataToBeUpdated, {
     new: true,
   });
   return updatedTask;
 };
 
 export const deleteTaskById = async (id) => {
   const deleteTask = await TasksModel.findByIdAndDelete(id);
   return deleteTask;
 };
 
 export const fetchTaskById = async (id) => {
   const task = await TasksModel.findById(id);
   return task;
 };