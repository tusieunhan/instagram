const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    photos: {
        type: [],
    },
});

let Post = mongoose.model("Post", postSchema);

module.exports = { Post };