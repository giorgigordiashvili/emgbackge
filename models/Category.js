var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  image: String
});
module.exports = mongoose.model("Category", categorySchema);
