const express = require(`express`)
const app = express()

app.use(express.json())

// call transaksiController
let transaksiController = require("../controller/transaksi.controller")
const  auth = require(`../controller/auth.controller`)

// endpoint get data transaksi
app.get("/",transaksiController.getAlltransaksi)
app.post("/", auth.authVerify,transaksiController.addtransaksi)
app.put("/:id", auth.authVerify,transaksiController.updatetransaksi)
app.delete("/:id", auth.authVerify,transaksiController.deletetransaksi)
app.post("/find",transaksiController.findTransaksi)
app.get("/:id", transaksiController.getTransaksiById)
module.exports = app