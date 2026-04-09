const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

async function registerController (req, res)  {
  const { username, email, password, bio, profileImage } = req.body;

  //=> it is not the efficent way to write the code

  // const isUserExistByEmail = await userModel.findOne({email})

  // if(isUserExistByEmail){
  //     return res.status(409).json({
  //         message:"User already exist with this email"
  //     })
  // }

  // const isUserExistByUserName = await userModel.findOne({username})

  // if(isUserExistByUserName){
  //    return res.status(409).json({
  //     message:"User already exist with this username"
  //    })
  // }

  //=>efficent way to write the code

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        "User already exists" +
        (isUserAlreadyExist.email == email
          ? "Email already exist"
          : "Username already exist"),
    });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
    username,
    email,
    bio,
    profileImage,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token" , token)

  /** we never send the password in the response so her we dont send the password in the response  */

  res.status(201).json({
    message: "User registred successfully",
    user:{
        email:user.email,
        username:user.username,
        bio:user.bio,
        profileImage:user.profileImage

    }
  })
}


async function loginController (req,res) {
    const {username , email , password} = req.body

    /*
    username
    password

    email
    password
     */

    const user = await userModel.findOne({
        $or:[
            {
                username:username
            },
            {
                email:email
            }
        ]
    })

    if(!user) {
        return res.status(404).json({
            message:"User not found"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const isPasswordValid = hash == user.password

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid Passowrd"
        })
    }


    const token = jwt.sign({
        id:user._id
    },
    process.env.JWT_SECRET ,
     {expiresIn:"1d"}
    )

    res.cookie("token" , token)

    res.status(200).json({
        message:"User logged In successfully",
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}