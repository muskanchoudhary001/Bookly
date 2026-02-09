import express from "express"
import bcrypt from   "bcryptjs"
import jwt from "jsonwebtoken" 
import User from "../models/userModel"

const router = express.Router();

//Register
router.post("/register",async(req,res) =>{
  const {name,email,password } = req.body;

  const exists = await User.findOne({email});

  if(exists) {
    return res.status(400).json({ message: "User already exists"});
  }

  const hashedPassword = await bcrypt.hash(password,10);

  await User.create({
    name,
    email,
    password: hashedPassword,
  })

  res.status(201).json({message: "User registered successfully" });

});


//Login
router.post("/login",async( req,res) => {
  const {email,password } = req.body

  const user = await USer.findOne({email});

  if(!user) {
    return res.status(400).json({ message: "Invalid credentials"});
  }

  const match = await bcrypt.compare(password,user.password);
  if(!match) {
    return res.status(400).json({message: "Invalid credentials"})
  }
  
  const token = jwt.sign(
    {id: user._id, role: user.role },
    process.env.JWT_SECRET,
    {expiresIn: "1d"}
  )
  
  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      role: user.role,
    }
  })
   
});

export default router;


