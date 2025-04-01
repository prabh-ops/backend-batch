import express from "express";
import IndexRouter from "./router/index.router.js";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./utils/swagger.js"; 
const app = express();

app.use(express.json());
app.use("/", IndexRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
export default app;
