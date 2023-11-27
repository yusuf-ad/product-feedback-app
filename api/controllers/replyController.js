const Comment = require("../models/commentModel");

exports.createReply = async (req, res) => {
  try {
    const newReply = {
      fullName: req.body.fullName,
      username: req.body.username,
      reply: req.body.reply,
      userImg: req.body.userImg,
    };

    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $push: { replies: newReply } },
      { new: true } // Set new: true to return the updated feedback document
    );

    res.status(200).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed to create reply",
    });
  }
};
