const nodemailer = require("nodemailer")

// create reusable transporter object using the default SMTP transport
module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "2793b550eb0fcf", // generated ethereal user
      pass: "9b81839dcbad25", // generated ethereal password
    },
  });