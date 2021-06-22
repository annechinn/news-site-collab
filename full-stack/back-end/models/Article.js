const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    author: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User' 
    },
    local: {
      type: Boolean
    },
    nytURL: {
      type: String,
    },
    nytURI: {
      type: String
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
  },
  { timestamps: true }
);

mongoose.model("Article", ArticleSchema);
