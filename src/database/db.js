import { connect}from "mongoose";
const connectionDb = connect(process.env.MONGODB_URL);
export default connectionDb

