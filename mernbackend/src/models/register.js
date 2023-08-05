const mongoose = require("mongoose")
const user = new mongoose.Schema({
    Username:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require:true,
    },Confirm_Password:{
        type:String,
        require:true,
    },
})
const register = new mongoose.model("Register",user)
module.exports = register;
