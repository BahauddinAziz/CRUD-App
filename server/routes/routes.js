// here we give routes like /addUsers

const express = require("express");
const addUsers = require("../userController/userControl.js")
const getUsers = require("../userController/userControl.js")
const getUSerBiId = require("../userController/userControl.js")
const editUser = require("../userController/userControl.js")
const deleteUser = require("../userController/userControl.js")


const router = express.Router();

 router.post("/addUsers",addUsers)
 router.get("/",getUsers);
 router.get("/:id",getUSerBiId);
 router.put("/editUsers/:id",editUser); 
 router.delete("/deleteUsers/:id",deleteUser); 

module.exports = router;
