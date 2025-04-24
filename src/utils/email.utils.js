import nodemailer from "nodemailer";
import { EMAIL, PASSWORD, } from "../config/variables.js";

 const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 587,
   secure: false, 
   auth: {
     user: EMAIL,
     pass: PASSWORD, 
   },
 });
 
export const sendEmail = async ({ subject, body, to, cc }) => {
  try {
    await transporter.sendMail({
      from: EMAIL,
      to: to,
      cc,
      subject,
      html: body,
    });
  } catch (error) {
    console.error("Error sending email:", error.message);
    if (error.response) {
      console.error("SMTP Response:", error.response);
    }
    throw new Error("Failed to send email. Please check your credentials or email configuration.");
  }
};