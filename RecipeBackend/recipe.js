const express = require('express');
const { addRecipe } = require('./recipeService');

const router = express.Router();

router.post('/recipes', async (req, res) => {
  const { name, ingredients, instructions, difficulty } = req.body;
  try {
    const newRecipe = await addRecipe(name, ingredients, instructions, difficulty);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
