const fs = require('fs');

function readJsonFile(res) {
  fs.readFile('./metrics/metrics.json', 'utf-8', (error, response) => {

    if(error) {
      console.log(error, '||| error');
      res.status(404).send(error);
      return;
    }
    const jsonResponse = JSON.parse(response);
    const metrics = {
      'lighthouseVersion': jsonResponse['lighthouseVersion'],
      'firstContentfulPaint': jsonResponse['audits']['first-contentful-paint'],
    };
    res.status(200).send(metrics);
  });
}

module.exports = { readJsonFile };
