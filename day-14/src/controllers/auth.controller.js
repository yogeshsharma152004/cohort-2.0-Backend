const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function registerController (req , res)  {
 
    const {username,email,password,bio,profileImg} = req.body

    const isUserAlreaExist = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(isUserAlreaExist){
        return res.status(409).json({
            message:"User already exist" + (isUserAlreaExist.email == email ? "Email already exist" : "Username alreay exist")
        })
    }

    const hash = await bcrypt.hash(password , 10)

    const user = await userModel.create({
        username,
        email,
        password:hash,
        bio,
        profileImg
    })

    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET , {expiresIn:"1d"})

    res.cookie("token" , token)

    res.status(201).json({
        message:"User created",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImg:user.profileImg
        }
    })
}

async function loginController (req,res)  {
    const {username,email,password} = req.body

    const user = await userModel.findOne({
        $or:[
            {username:username},
            {email:email}
        ]
    })

    if(!user){
        return res.status(404).json({
            message:"User not exist"
        })
    }

   

    const isPsswordValid = await bcrypt.compare(password,user.password)

    if(!isPsswordValid){
        return res.status(401).json({
            message:"Password Invalid"
        })
    }

    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET , {expiresIn:"1d"})

    res.cookie("token" , token)

    res.status(200).json({
        message:"User loggedIn sucessfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImg:user.profileImg
        }
    })
}

module.exports = {registerController,loginController}