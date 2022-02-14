const User = require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
exports.SignUp=  async(req,res)=>{

    const {name,email,password,age}=req.body
    try {
        
        const founduser= await User.findOne({email})
        if(founduser) {return res.status(400).send({errors:[{msg:'user already exists'}]})}
    
        const user=new User(req.body)
    const salt=10
    const hashedpassword=bcrypt.hashSync(password,salt)
    user.password=hashedpassword

    const payload={id:user._id}

 const token=jwt.sign(payload,process.env.SecretOrKey)

       await user.save()
        res.status(200).send({msg:"register with succes",user,token})
    } catch (error) {
        res.status(500).send({errors:[{msg:'could not register'}]})
    }
    } 

    exports.SignIn=async(req,res)=>{
const {email,password}=req.body
        try {
            const found=   await User.findOne({email})
            if (!found) {return res.status(400).send({errors:[{msg:'bad credentials'}]}) }
            const match=  await bcrypt.compare(password,found.password)
            if (!match) {return res.status(400).send({errors:[{msg:'bad credentials'}]}) }
           const payload={id:found._id}
           const token=jwt.sign(payload,process.env.SecretOrKey)

           res.status(200).send({msg:'login with succes',found,token})

            

        } catch (error) {
            res.status(500).send({errors:[{msg:'could not login'}]})
        }
    }