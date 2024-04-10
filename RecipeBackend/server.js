const express = require('express');
const mongodb = require('mongodb');

const app = express();
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';
const dbName = 'recipe_database';

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('recipes');

    app.post('/add_recipe', express.json(), (req, res) => {
        const recipe = req.body;
        collection.insertOne(recipe, (err, result) => {
            if (err) {
                console.error('Error adding recipe:', err);
                res.status(500).send('Error adding recipe');
                return;
            }
            console.log('Recipe added:', result.ops[0]);
            res.status(201).send('Recipe added successfully');
        });
    });

    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});
