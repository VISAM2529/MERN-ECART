const mongoose = require("mongoose")


const RegisterSchema = new mongoose.Schema({
        email:{
            type:String,
            require:true,
            unique:true
        },
        mobile:{
            type:Number,
            require:true,
            unique:true
        },
        fname:{
            type:String,
            require:true
        },
        lname:{
            type:String,
            require:true
        },
        profilePhoto:{
            type:String,
            require:true
        },
        username:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true,
            unique:true
        }
})

module.exports = mongoose.model("registerSchema",RegisterSchema)