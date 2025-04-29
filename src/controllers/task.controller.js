import { createTask, deleteTaskById, fetchAllTasks, fetchTaskById, updateTaskById } from "../services/task.service.js";
import { generateCustomPdfBuffer } from "../utils/pdf.utils.js";
import { renderTemplate } from "../utils/template.utils.js"; // Ensure this path is correct

  
  export const createTaskController = async (req, res) => {
    const loggedInUser=req.auth
    try {
      const task = await createTask({ ...req.body, createdBy: loggedInUser._id });
      res.send(task);
    } catch (error) {
      res.status(500).send({
        message: "Something Went Wrong",
      });
    }
  };
  
  export const updateTaskController = async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
  
      const taskUpdate = await updateTaskById(id, body);
      res.send(taskUpdate);
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong",
      });
    }
  };
  
  export const getTaskController = async (req, res) => {
    try {
      const taskData = await fetchTaskById(req.params.id);
      res.status(200).send(taskData);
    } catch (error) {
      res.status(500).send({
        message: "Something Went Wrong",
      });
    }
  };
  
  export const deleteTaskByIdController = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTask = await deleteTaskById(id);
      res.status(200).json({
        message: "Task has been deleted successfully",
        deletedTask,
      });
    } catch (error) {
      res.status(500).send({
        message: "Something went wrong",
      });
    }
  };
  
  export const getTasksController = async (req, res) => {
    try {
      const tasks = await fetchAllTasks();
      res.status(200).send(tasks);
    } catch (error) {
      res.status(500).send({
        message: error.message || "Something went wrong",
      });
    }
  };




  export  const downloadInvoicePDF = async (req, res) => {
    try {
       const tasks = await fetchAllTasks();

       const invoiceData = tasks.map((task) => ({
        id: task._id.toString(),
        title: task.name,
        description: task.description,
        status: task.status,
        createdBy: task.createdBy.name,
        dueDate: "Jan 1, 2023",
      }));

    const html=await renderTemplate(res,"invoice",invoiceData)
      const pdfBuffer = await generateCustomPdfBuffer(html);
      res.type('pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
      res.send(pdfBuffer);
  
    } catch (error) {
      console.error('PDF Generation Error:', error);
      res.status(500).send('Error generating PDF');
    }
  };

