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

const feedbackSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      default: "Feature",
    },
    totalUpvotes: {
      type: Number,
      default: 0,
    },
    totalComments: {
      type: Number,
      default: 0,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
