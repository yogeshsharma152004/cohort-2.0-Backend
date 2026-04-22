const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already exist"],
    required: true,
  },
  email: {
    type: String,
    unique: [true, "email already exist"],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
  profileImg: {
    type: String,
    default:
      "https://ik.imagekit.io/4dluzowqr/download.webp?updatedAt=1775724743238",
  },
});


const userModel = mongoose.model("user" , userSchema)

module.exports = userModel