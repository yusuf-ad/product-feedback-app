const express = require("express");

const app = express();
const cors = require("cors");

const feedbackRouter = require("./routes/feedbackRoutes");
const commentRouter = require("./routes/commentRoutes");
const replyRouter = require("./routes/replyRoutes");

app.use(
  cors({
    origin: ["https://product-feedback-app-client.vercel.app"],
    methods: ["POST", "PUT", "DELETE", "PATCH", "GET"],
    credentials: true,
  })
);
// req.body'i kullanmak için lazım
app.use(express.json());

// ! WHERE OUR ROUTER MOUNTS
// ! They are simply middleware functions that only apply for a certain URL.

// app.get("/", (req, res) => res.json("hello, from the server"));

app.use("/", feedbackRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/replies", replyRouter);

module.exports = app;
