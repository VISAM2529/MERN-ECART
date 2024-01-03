const mongoose = require("mongoose")


const OrderSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
     img:{
        type:String,
        require:true
     },
     name:{
        type:String,
        require:true
     },
     amount:{
        type:String,
        require:true
     },
     quantity:{
        type:String,
        require:true
     },
})

module.exports = mongoose.model("orderschema",OrderSchema)