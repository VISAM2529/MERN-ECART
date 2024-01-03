const nodemon = require("nodemon")
const express = require("express")
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session")
let  session_username =""
const port = process.env.PORT || 5000

const registerSchema = require("./database/registerSchema");
const cartSchema = require("./database/cartSchema")
const orderschema = require("./database/Order")
const connectDB = require("./database/db");
connectDB();

const app = express();



app.use(express.json({ extended: false }));
const cors = require("cors");
app.use(cors());

app.use(session({
  secret:"MySecretKey",
  saveUninitialized:false,
  resave:false,
  cookie:{
    secure:false,
    httpOnly:true,
    maxAge:300000
  }
}))
app.post("/SignUp", async (req, res) => {

  const { email } = req.body;
  const {fname}=req.body
  const {lname}=req.body
  const {profilePhoto}=req.body
  const { mobile } = req.body;
  const { username } = req.body;
  const { password } = req.body;
  await registerSchema.findOne({ email: email }).then(user=>{
    if (user) {
      res.json("Exist")
    } else if(!user) {
      res.json("Created")
      const newData = new registerSchema({
        email: email,
        fname:fname,
        lname:lname,
        profilePhoto:profilePhoto,
        mobile: mobile,
        username: username,
        password: password,
      });
      newData.save();

    }
      
    }
)

    
    
  
 
});


app.post("/login",async(req,res)=>{
  const {username} = req.body
  const {password} = req.body
  await registerSchema.findOne({username:username}).then(user=>{
    if(user){
      if(user.password===password){
        session_username = username
        console.log(session_username)
        res.json("Success")
      }
      else{
        res.json("Invalid")
      }
    }
    else{
      res.json("not found")
    }
  })
})
app.get('/getSession',(req,res)=>{
  res.status(202).send("Username = "+req.session.username)
})


app.post("/cart",async (req,res)=>{
  const sessionUsername=session_username
  const {id}=req.body
  const {category}=req.body
  const {img} = req.body
  const {productName}=req.body
  const {productPrice}=req.body
  try {
    const existingCartItem = await cartSchema.findOne({
      username: session_username,
      productName: productName
    });
  
    if (!existingCartItem) {
      const newCart = new cartSchema({
        id:id,
        username: session_username,
        category: category,
        img: img,
        productName: productName,
        productPrice: productPrice
      });
  
      await newCart.save(); // Wait for the save operation to complete
  
      res.json("Added");
    } else {
      res.json("Exist"); // Deny addition of duplicate item
    }
  } catch (error) {
    // Handle the error appropriately, e.g., send an error response
    res.status(500).json({ error: "Internal Server Error" });
  }
  
})
app.post("/orders",async (req,res)=>{
  const sessionUsername=session_username
  const {img}=req.body
  const {name}=req.body
  const {amount} = req.body
  const {quantity}=req.body
  try {

      const newCart = new orderschema({
        username:sessionUsername,
        img:img,
        name: name,
        amount: amount,
        quantity: quantity,
      })
  
      await newCart.save(); // Wait for the save operation to complete
  
      res.json("Added");
  } catch (error) {
    // Handle the error appropriately, e.g., send an error response
    res.status(500).json({ error: "Internal Server Error" });
  }
  
})
  
     
app.get("/cartDetails",async(req,res)=>{
  try {
    const sessionUserName = session_username
    const useCart = await cartSchema.find({username:sessionUserName})
    if(useCart){
      res.json(useCart)
    }
  } catch (error) {
    console.log(error.message)
  }
})
app.get("/orderDetails",async(req,res)=>{
  try {
    const sessionUserName = session_username
    const orders = await orderschema.find({username:sessionUserName})
    if(orders){
      res.json(orders)
    }
  } catch (error) {
    console.log(error.message)
  }
})
app.get("/profile",async(req,res)=>{
  try {
    const sessionUserName = session_username
    const userProfile = await registerSchema.find({username:sessionUserName})
    if(userProfile){
      res.json(userProfile)
    }
  } catch (error) {
    console.log(error.message)
  }
})

app.delete('/delete/:name', async (req, res) => {
  try {
    const name=(req.params.name).replace(/^:/, '')
    console.log(name)
    const SessionName = session_username
  await cartSchema.findOneAndDelete({
    username:SessionName,
    productName:name
  }).then(()=>{
      res.json({ success: true });
    })

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
app.listen(port, () => {
  console.log(`Server Running on port : ${port}`);
});
