const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  data: {
    type: [],
  },
  type: {
    type: String,
    default: "image/jpg",
  },
});

let Post = mongoose.model("Post", postSchema);

module.exports = { Post };
