import mongoose from "mongoose";

const Blog = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  filesize: {
    type: String,

    required: true,
  },
  close: {
    type: Boolean,
    required: true,
  },
  tag: {
      type: Object,
      
  },
});

const BlogSchema = mongoose.model("blog", Blog);
module.exports = BlogSchema;