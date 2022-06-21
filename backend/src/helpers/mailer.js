const nodemailer = require("nodemailer")

require("dotenv").config()

sendMail = async (recip, template) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: recip,
    subject: template.subject,
    html: template.body,
  }

  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info)
      console.log("Message sent")
    })
    .catch((err) => {
      console.warn(err)
      console.log("Something went wrong")
    })
}

module.exports = { sendMail }
