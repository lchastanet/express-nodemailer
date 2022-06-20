const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

const router = express.Router()

const mailRoutes = require("./routes/mailRoutes")

router.use("/mail", mailRoutes)

app.use("/api", router)

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
