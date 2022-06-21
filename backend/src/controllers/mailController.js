const { sendMail } = require("../helpers/mailer")
const resetTemplate = require("../templates/resetTemplate")

exports.forgotten = async (req, res) => {
  const recip = req.body.email

  try {
    const template = resetTemplate("http://localhost:8000/api/reset")

    await sendMail(recip, template)

    res.senStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }
}
