const express = require("express");

const app = express();
const cors = require("cors");

const feedbackRouter = require("./routes/feedbackRoutes");

// req.body'i kullanmak için lazım
app.use(express.json());
app.use(cors());

// ! WHERE OUR ROUTER MOUNTS
// ! They are simply middleware functions that only apply for a certain URL.
app.use("/api/v1/feedbacks", feedbackRouter);

module.exports = app;
