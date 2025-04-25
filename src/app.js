import express from "express";
import IndexRouter from "./router/index.router.js";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./utils/swagger.js";
import path from "path";
import { fileURLToPath } from "url";
import { create } from "express-handlebars";
import cookieParser from "cookie-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const hbs = create({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "view", "layouts"),
  partialsDir: path.join(__dirname, "view", "partials"),
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "view"));

app.use("/static", express.static(path.join(__dirname, "uploads")));
app.use("/", IndexRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
export default app;
