const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    topic: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Topic' 
    },
    title: {
      type: String,
      required: [true, "can't be blank"],
    },
    abstract: {
      type: String,
      required: [true, "can't be blank"],
    },
    body: {
      type: String,
      required: [true, "can't be blank"]
    },
    imageURL: String,
  }
);

mongoose.model("Article", ArticleSchema);
