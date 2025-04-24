import { filesize } from "filesize";
import { HOST } from "../config/variables.js";
import Upload from "../models/upload.model.js";

export const uploadService = async ({ filename, path, mimetype, size }) => {
  const upload = await Upload({
    filename,
    path: `${HOST}/static/${encodeURIComponent(filename)}`,
    mimetype,
    size,
  }).save();

  return upload;
};

export const getuploadService = async () => {
  const data = await Upload.find().lean();
  const modifiedFiles = data.map((file) => {
    return {
      ...file,
      size: filesize(file.size, { standard: "jedec" }),
    };
  });

  return modifiedFiles;
};
