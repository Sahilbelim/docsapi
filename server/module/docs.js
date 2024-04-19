const mongoose = require("mongoose");

const Docs = mongoose.Schema({
  desc: {
    type: String,
  },
  filesize: {
    type: String,
  },
  close: {
    type: String,
  },
  tagisOpen: {
    type: String,
  },
  tagTitle: {
    type: String,
  },
  tagColor: {
    type: String,
  },
});
 
const DocsSchema = mongoose.model("docs", Docs);
module.exports = DocsSchema;