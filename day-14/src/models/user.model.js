const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "user name already exist"], 
    required: [true, "User name required"],
  },
  email: {
    type: String,
    unique: [true, "email already exist"],
    required: [true, "email required"],
  },
  password: {
    type: String,
    required: [true, "password required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://ik.imagekit.io/4dluzowqr/download.webp",
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel
