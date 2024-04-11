const Recipe = require('./models/recipeModel');

async function searchRecipes(query) {
  try {
    const recipes = await Recipe.find({
      $or: [
        { name: { $regex: query, $options: 'i' } }, 
        { ingredients: { $regex: query, $options: 'i' } },
        { difficulty: { $regex: query, $options: 'i' } }, 
      ],
    });
    return recipes;
  } catch (error) {
    console.error('Error searching recipes:', error);
    throw error;
  }
}

module.exports = {
  searchRecipes,
};
