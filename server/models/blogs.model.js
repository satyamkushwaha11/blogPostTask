const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    blogContent: {
      type: String,
      trim: true,
    },
  },
  {
    timeStamp: true,
  }
);

const BlogsModel = model("Blog", blogSchema);

module.exports = BlogsModel;
