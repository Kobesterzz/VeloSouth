const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail", // or another email service
  auth: {
    user: "kobeshaw330@gmail.com", // replace with your email
    pass: "24Midnight", // replace with your password or app password
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "recipient-email@example.com", // replace with the recipient's email
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Failed to send email.");
    } else {
      res.status(200).send("Email sent successfully.");
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
