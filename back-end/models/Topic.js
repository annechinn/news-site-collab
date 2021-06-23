const mongoose = require("mongoose");

const TopicSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    color: String,
    showcaseArticle: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
  },
  { timestamps: true }
);

mongoose.model("Topic", TopicSchema);
