import mongoose, { Schema, model, } from "mongoose";

const CommentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "newUser",
    },
  },
  {
    timestamps: true,
  }
);

 const Comment=model("Comment", CommentSchema);


 export default Comment;
