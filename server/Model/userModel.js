const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  birthday: {
    type: Date,
  },
  photo: {
    required: true,
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png",
  },
  sex: {
    type: String,
    default: "male",
  },
  followers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

let User = mongoose.model("User", userSchema);

module.exports = { User };
