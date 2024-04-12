const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // To manage environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define the Recipe schema
const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  }
});

// Create the Recipe model
const Recipe = mongoose.model('Recipe', recipeSchema);

// API routes
// Get all recipes
app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching recipes", error: err });
  }
});

// Add a new recipe
app.post('/api/recipes', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ message: "Error saving the recipe", error: err });
  }
});

// Handle 404 for unmatched routes
app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
