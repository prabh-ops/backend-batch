import { connect}from "mongoose";
const connectionDb = connect("mongodb://localhost:27017/sagmatic");
export default connectionDb

