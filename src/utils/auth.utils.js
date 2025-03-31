import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createPasswordHash = (originalPassword) => {
  return bcrypt.hashSync(originalPassword, 10);
};

export const comparePassword = (originalPassword, hashedPassword) => {
  return bcrypt.compareSync(originalPassword, hashedPassword);
};

export const generateToken = (data) => {
  const token = jwt.sign(data, "12345" ,{
    expiresIn: "1h",
  });

  return token;
};

export const verifyToken = (token) => {
  try {
    const data = jwt.verify(token,"12345");
    return data;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
