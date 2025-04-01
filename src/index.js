import app from "./app.js";
import connectionDb from "./database/db.js";
import dotenv from 'dotenv'
// import testModel from "./model.test.js";

dotenv.config({
    path:"./env"
})
connectionDb
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(" connection failed", err);
  });



  // testModel()