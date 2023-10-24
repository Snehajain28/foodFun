
const User = require('../models/User')
const bcrypt = require('bcrypt')


exports.createUser = async(req,res) => {
     

    try{
        const {name,email,location,password}= req.body;
       
    const newPassword=await bcrypt.hash(password,10)
    await User.create( {
        name,email,location,password:newPassword
     })
     res.json({
        success:true
     })
    }
    catch(e) {
        console.log(e)
        console.log("creating user error")
    }

}