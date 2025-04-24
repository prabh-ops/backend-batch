import { getuploadService, uploadService } from "../services/upload.service.js";

export const uploadController = async (req, res) => {
  try {
    const { filename, path, mimetype, size } = req.file;

    const response = await uploadService({ filename, path, mimetype, size });
    res.send({ message: " form uploaded successfully", file: response });
  } catch (error) {
    res.send(error.message);
  }
};

export const getuploadFileController = async (req,res) => {
  try {
    const response = await getuploadService();
    res.send(response);
  } catch (error) {
    res.send(error.message);
  }
};
