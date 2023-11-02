const mongoose = require("mongoose");

const { Schema } = mongoose;

const FeedbackSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      default: "Feature",
    },
    category: {
      type: String,
      required: true,
    },
    totalUpvotes: {
      type: Number,
      default: 0,
    },
    totalComments: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
