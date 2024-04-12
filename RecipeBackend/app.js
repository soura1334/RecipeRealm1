require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

app.use('/api/recipes', require('./routes/recipes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
