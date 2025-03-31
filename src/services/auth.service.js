import User from "../models/user.model.js";
import {
  comparePassword,
  createPasswordHash,
  generateToken,
} from "../utils/auth.utils.js";
import { createUser } from "./user.service.js";

export const signUp = async ({ name, email, password }) => {
  const hashedPassword = createPasswordHash(password);
  const newUser = await createUser({
    name,
    password: hashedPassword,
    email,
  });

  return { message: "User Created Successfully", user: newUser };
};

export const signIn = async ({ email, password }) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    throw new Error("User Does Not Exists");
  }
  const hashedPassword = user.password;

  const isValid = comparePassword(password, hashedPassword);

  if (!isValid) {
    throw new Error("Wrong Password");
  }
  const userdata = await User.findOne({
    email,
  })
    .select("name email").lean();

  const token = generateToken(userdata);
  return { message: "User Logged In Successfully", user: userdata, token };
};
