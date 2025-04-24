import { connect}from "mongoose";
import { MONGODB_URL } from "../config/variables.js";
const connectionDb = connect(MONGODB_URL);
export default connectionDb

