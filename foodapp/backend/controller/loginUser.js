
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

exports.loginUser = async(req,res) => {
     
     
  try{
        const {email,password}= req.body;
       const user = await User.findOne({email});

       if(!user)
       {
        return res.
        status(400).json({
            success:false,
            message:"user dont exist"
         })
       }
    
       const newPassword =  await bcrypt.compare(password,user.password);


       if(!newPassword){
        return  res.status(400).json({
            success:false,
            message:"password not match"
         })
       }
       const data = {
        userData:{
            id:user.id
        }
       }
       const token = jwt.sign(data,process.env.JWT_SECRET)
       res.status(200).json({
        success:true,
        token,
        message:"correct login"
     })
    }
    catch(e) {
        console.log("login user error")
       console.log(e)
    }

}