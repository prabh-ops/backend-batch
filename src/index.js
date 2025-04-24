import app from "./app.js";
import connectionDb from "./database/db.js";

// import testModel from "./model.test.js";

import "./config/variables.js"
import { PORT } from "./config/variables.js";
connectionDb
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(" connection failed", err);
  });



  // testModel()