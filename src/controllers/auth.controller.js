import {
  forgotPassword,
  forgotPasswordV2,
  resetPassword,
  resetPasswordV2,
  signIn,
  signUp,
} from "../services/auth.service.js";
import { sendEmail } from "../utils/email.utils.js";

export const signUpController = async (req, res) => {
  try {
    const user = await signUp(req.body);
   
    await sendEmail({
      subject: "Welcome to the app",
      body: "Hello " + req.body.name + ". we are very excited to have you here",
      to: req.body.email,
    });
   
    res.json({ data: user });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signInController = async (req, res) => {
  try {
    const user = await signIn(req.body);
    res.send(user);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    // await forgotPassword(req.body.email);
    await forgotPasswordV2(req.body.email);
    res.send({
      message: "Otp sent on email",
    });
    // res.send(req.body)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something went wrong!",
    });
  }
};

export const resetPasswordController = async (req, res) => {
  try {
    // await resetPassword({
    //   email: req.body.email,
    //   otp: req.body.otp,
    //   newPassword: req.body.newPassword,
    // });
    await resetPasswordV2({
      token: req.query.token,
      newPassword: req.body.newPassword,
    });
    res.send({
      message: "Reset is successful",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Something went wrong!",
    });
  }
};
