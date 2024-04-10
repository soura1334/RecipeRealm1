const Recipe = require('./models/recipeModel');

async function addRecipe(name, ingredients, instructions, difficulty) {
  try {
    const newRecipe = new Recipe({ name, ingredients, instructions, difficulty });
    await newRecipe.save();
    return newRecipe;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
}

module.exports = {
  addRecipe,
};
