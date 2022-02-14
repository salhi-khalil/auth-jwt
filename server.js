const express=require("express")
const Connectdb = require("./config/ConnectDb")
const router = require("./routes/auth")
require('dotenv').config()
const app=express()


Connectdb()
app.use(express.json())


app.use('/api/users',router)



app.listen(process.env.port,()=>console.log(`port is running on port ${process.env.port}`))