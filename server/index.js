const express = require("express");
const dotenv = require("dotenv")
const connection = require("./database/db.js");
const Routes = require("./routes/routes.js")
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express()

// initialise the dotenv
dotenv.config();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());

// to handle corse error during api request
app.use(cors());

// if you dont have default end route then leave first parameter empty
app.use("/",Routes);

const PORT = 8000;
connection()

app.listen(PORT,()=> console.log(`server Running on PORT : ${PORT}`))