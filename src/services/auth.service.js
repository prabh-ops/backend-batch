import User from "../models/user.model.js";
import {
  comparePassword,
  createPasswordHash,
  generateOTP,
  generateToken,
  verifyToken,
} from "../utils/auth.utils.js";
import { createUser } from "./user.service.js";
import { sendEmail } from "../utils/email.utils.js";

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
    .select("name email")
    .lean();

  const token = generateToken(userdata);
  return { message: "User Logged In Successfully", user: userdata, token };
};

export const forgotPassword = async (email) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    throw new Error("User Not Found");
  }
  const otp = generateOTP();
  await sendEmail({
    subject: "Your otp for password reset",
    body: otp,
    to: email,
  });
  user.lastOtp = otp;
  await user.save();
};

export const resetPassword = async ({ email, otp, newPassword }) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    throw new Error("User Not Found");
  }
  if (otp !== user.lastOtp) {
    throw new Error("OTP is Wrong");
  }
  const newpwdhash = await createPasswordHash(newPassword);
  user.password = newpwdhash;
  user.lastOtp = undefined;
  await user.save();
};

export const forgotPasswordV2 = async (email) => {
  const user = await User.findOne({
    email,
  });
  if (!user) {
    throw new Error("User Not Found");
  }
  const token = generateToken({ email, tokenType: "forgotPassword" }, "2m");

  await sendEmail({
    subject: "Your password reset link",
    body: `
    <p>Click the link below to reset your password:</p>
    <a href="http://localhost:5000/reset-password?token=${token}>
      Reset Password 
    </a>
    `,
    to: email,
  });
};

export const resetPasswordV2 = async ({ token, newPassword }) => {
  const data = verifyToken(token);
  if (!data) {
    throw Error("Data not found");
  }
  const email = data.email;

  const newpwdhash = await createPasswordHash(newPassword);

  await User.findOneAndUpdate(
    {
      email,
    },
    {
      password: newpwdhash,
    },
    {
      new: true,
    }
  );
};
