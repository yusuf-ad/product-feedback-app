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
    minlength: [8, "Comment should be at least 8 characters long"],
  },
  userImg: {
    type: String,
    default:
      "https://lm-product-feedback-app.netlify.app/assets/user-images/image-george.jpg",
  },
});

const Comment = mongoose.model("comments", commentSchema);

module.exports = commentSchema;
