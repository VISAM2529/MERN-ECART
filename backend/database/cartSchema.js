       const mongoose = require("mongoose")


       const CartSchema = new mongoose.Schema({
              id:{
                     type:Number,
                     require:true
              },
              username:{
                     type:String,
                     require:true
              },
              category:{
                     type:String,
                     require:true
              },
              img:{
              type:String,
              require:true
              },
              productName:{
              type:String,
              required:true
              },
              productPrice:{
              type:String,
              required:true
              }
       })

       module.exports = mongoose.model("cartSchema",CartSchema)