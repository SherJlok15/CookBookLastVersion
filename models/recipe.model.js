const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  username: { type: String, required: true, trim: true, minlength: 3 },
  title: { type: String, required: true, trim: true, minlength: 3 },
  text: { type: String, required: true, trim: true, minlength: 3 },
  update: { type: Boolean, required: true },
  lastVersions: { type: Array, required: true },
  comments: { type: Array, required: true },
  favorite: { type: Number, required: true }
},{
  timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
