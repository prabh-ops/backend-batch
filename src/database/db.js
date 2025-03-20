import mongoose from "mongoose";
const connectionDb = mongoose.connect("mongodb://localhost:27017/sagmatic");
export  default connectionDb