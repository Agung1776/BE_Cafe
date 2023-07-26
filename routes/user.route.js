const express = require(`express`)
const app = express()
app.use(express.json())
const userController = require(`../controller/user.controller`)

//endpoint
app.post("/login", userController.login)
app.get("/", userController.getAllUser)
app.post("/", userController.addUser)
app.put("/:id", userController.updateUser)
app.delete("/:id", userController.deleteUser);
app.post("/find",userController.findUser)


module.exports = app