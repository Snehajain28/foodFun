const express = require ('express');
const dbconnect = require('./config/connection');
const app=express();
const routes = require('./routes/routes')
require('dotenv').config();

dbconnect();
app.use(express.json());
PORT=process.env.PORT||8000

app.use((req,res,next)=>{
res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
 "Origin, X-Requested-With, Content-Type, Accept")
 next();
})
app.get('/' , (req,res) => {
    res.send("hefllo")
})


app.use('/api/v1' ,routes)

app.listen(PORT , () => {
    console.log("listening");
})