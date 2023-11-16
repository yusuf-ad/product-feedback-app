const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  fullName: { type: String, default: "yusuf ad" },
  username: {
    type: String,
    default: "YUSUFAD27",
    lowercase: true,
  },
  comment: {
    required: [true, "please enter write a comment"],
    type: String,
    maxlength: [255, "max length should be 255 characters"],
  },
  userImg: {
    type: String,
    default:
      "https://lm-product-feedback-app.netlify.app/assets/user-images/image-george.jpg",
  },
});

const Comment = mongoose.model("comments", commentSchema);

module.exports = { commentSchema, Comment };
