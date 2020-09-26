const express = require("express")
const app = express()
const router = require("./routes/musicasRoute")

//rotas aqui:
app.use("/", router)


//exportando app
module.exports = app