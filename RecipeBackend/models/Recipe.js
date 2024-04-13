const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [String],
  directions: [String],
  imagePath: { type: String, required: true }
});

module.exports = mongoose.model('Recipe', recipeSchema);
