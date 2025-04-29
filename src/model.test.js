// import { Comment } from "./models/comment.model.js";
import TasksModel from "./models/task.model.js";


async function testModel() {
  try {
    const task = await TasksModel.find(); // This will work even if the collection is empty
    console.log("Model is registered. tasks:",task);
  } catch (error) {
    console.error("Error:", error);
  }
}


 export default testModel;