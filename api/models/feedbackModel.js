const mongoose = require("mongoose");

const { Schema } = mongoose;

const FeedbackSchema = new Schema(
  {
    title: String,
    detail: String,
    category: String,
    totalUpvotes: Number,
    totalComments: Number,
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
