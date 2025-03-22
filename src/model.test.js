import { Comment } from "./models/comment.model.js";


async function testModel() {
  try {
    const comments = await  Comment.find(); // This will work even if the collection is empty
    console.log("Model is registered. Comments:", comments);
  } catch (error) {
    console.error("Error:", error);
  }
}

  
export default testModel;