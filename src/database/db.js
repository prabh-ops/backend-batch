import mongoose from "mongoose";
const connectionDb = mongoose.connect(process.env.MONGODB_URL);
export  default connectionDb