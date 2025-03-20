import mongoose from "mongoose";

const CommentSchema=mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
})

   export const Comment=mongoose.model("Comment",CommentSchema);