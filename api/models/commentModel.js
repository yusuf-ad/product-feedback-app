const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  fullName: { type: String, default: "yusuf ad" },
  username: { type: String, default: "YUSUFAD27", lowercase: true },
  comment: {
    required: [true, "please enter write a comment"],
    type: String,
    default:
      "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
  },
  userImg: {
    type: String,
    default:
      "https://lm-product-feedback-app.netlify.app/assets/user-images/image-george.jpg",
  },
});

module.exports = commentSchema;
