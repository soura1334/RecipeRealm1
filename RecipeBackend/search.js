const express = require('express');
const { searchRecipes } = require('./searchService');

const router = express.Router();

router.get('/search', async (req, res) => {
  const { query } = req.query;
  try {
    const recipes = await searchRecipes(query);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
