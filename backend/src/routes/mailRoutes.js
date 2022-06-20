const express = require("express")

const mailController = require("../controllers/mailController")

const router = express.Router()

router.post("/forgotten", mailController.forgotten)

module.exports = router
