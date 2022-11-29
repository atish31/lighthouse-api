const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is up');
});

const lighthouse = require('./controllers/lighthouse');
app.get('/getLightHouseScore', lighthouse.getLightHouseScore);
