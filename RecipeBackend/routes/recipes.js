const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const upload = require('../middleware/upload');

// POST: Add a new recipe
router.post('/', upload.single('image'), async (req, res) => {
  const { name, ingredients, directions } = req.body;
  const newRecipe = new Recipe({
    name,
    ingredients: ingredients.split(','),
    directions: directions.split('.'),
    imagePath: req.file.path
  });

  try {
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET: Search recipes
router.get('/', async (req, res) => {
  const searchQuery = req.query.name;
  try {
    const recipes = await Recipe.find({ name: { $regex: searchQuery, $options: 'i' } });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
