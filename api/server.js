const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Feedback model
const Feedback = require("./models/feedbackModel");

const app = express();

// req.body'i kullanmak için lazım
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("App connected to database");

    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("hello from the server");
});

// ! CRUD OPERATIONS

app.post("/feedback/add", async (req, res) => {
  const feedback = await Feedback.create(req.body);

  res.status(200).json({
    status: "success",
    feedback,
  });
});

app.get("/feedbacks", async (req, res) => {
  const feedbacks = await Feedback.find();

  res.status(200).json({
    results: feedbacks.length,
    status: "success",
    data: {
      feedbacks,
    },
  });
});

app.patch("/feedback/update/:id", async (req, res) => {
  const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: "success",
    data: {
      feedback,
    },
  });
});

app.delete("/feedback/delete/:id", async (req, res) => {
  const feedback = await Feedback.findByIdAndDelete(req.params.id);

  if (!feedback)
    return res.status(404).json({
      message: "Cannot found an item by that id",
    });

  // ! 204 means no content
  res.status(204).json({
    status: "success",
    data: null,
  });
});
