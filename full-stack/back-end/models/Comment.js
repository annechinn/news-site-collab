const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    body: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
  },
  { timestamps: true }
);

mongoose.model("Comment", CommentSchema);
