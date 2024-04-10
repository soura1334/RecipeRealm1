const express = require('express');
const searchRoutes = require('./search');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', searchRoutes);
app.use('/api', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

