require("dotenv").config();
const mongoose = require("mongoose")

const uri = process.env.URI

const connectDB = async()=>{
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Change this timeout value as needed
          })
        console.log("Successfully Connnect to Database")
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = connectDB;