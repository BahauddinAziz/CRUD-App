const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");


const userSchema = mongoose.Schema({
    name:String,
    email:String,
    username:String,
    phone:String
})

// initialise and connect with mongoose
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,"detail");

// give collection in which you want to store your data
 const user = mongoose.model("detail",userSchema)
 module.exports = user