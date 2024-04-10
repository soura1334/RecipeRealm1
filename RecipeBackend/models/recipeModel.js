const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  instructions: String,
  difficulty: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
