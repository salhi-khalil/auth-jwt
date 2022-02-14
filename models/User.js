const mongoose=require("mongoose")

const User= new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String,required:true},
    age:{type:Number}
})

module.exports=mongoose.model('User',User)