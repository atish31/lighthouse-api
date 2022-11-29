const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is up');
});

const getLightHouseScore = require('./controllers/getLighthousescore');
app.get('/getLightHouseScore', getLightHouseScore.getLightHouseScore);
