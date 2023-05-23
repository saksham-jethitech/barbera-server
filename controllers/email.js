import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

//email config

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  secure: false,
  service: "brevo",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

export const contactUsHandler = async (req, res) => {
  try {
    const { name, mobile, email, message } = req.body;

    const emailBody = `
      Name: ${name}
      Email: ${email}
      Mobile No: ${mobile}
      Message: ${message}
    `;

    const mailOptions = {
      from: process.env.EMAIL,
      to: "pm@jethitech.com",
      subject: "Contact Form Submission",
      text: emailBody,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const careerHandler = async (req, res) => {
  try {
    const { fName, lName, mobile, email, role, date } = req.body;

    const emailBody = `
        First Name: ${fName}
        Last Name: ${lName}
        Email: ${email}
        Mobile No: ${mobile}
        Role: ${role}
        Start Date: ${date}
      `;

    const mailOptions = {
      from: process.env.EMAIL,
      to: "pm@jethitech.com",
      subject: "Career Form Submission",
      text: emailBody,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
