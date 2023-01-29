// here we give routes like /addUsers

const express = require("express");
const userController = require("../userController/userControl.js")


const router = express.Router();

 router.post("/addUsers", userController.addUsers)
 //router.get("/",getUsers);
 //router.get("/:id",getUSerBiId);
 //router.put("/editUsers/:id",editUser); 
 //router.delete("/deleteUsers/:id",deleteUser); 

module.exports = router;
