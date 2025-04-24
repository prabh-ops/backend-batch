import mongoose from "mongoose";

const uploadModel = new mongoose.Schema(
  {
    filename: {
      type: String,
      require: true,
    },
    path: {
      type: String,
      require: true,
    },
    mimetype: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Upload = mongoose.model("upload", uploadModel);

export default Upload;
