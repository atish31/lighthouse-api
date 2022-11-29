const fs = require('fs');

function getLightHouseScore(req, res) {
  console.log('here');
  const { exec } = require('child_process');
  const url = req.query.url;
  const fileName = 'metrics/metrics.json'
  const lighthouseShellCommand = `lighthouse ${url} --chrome-flags='--headless' --output json --output-path ${fileName}`

  exec(lighthouseShellCommand, (error, shellOut, shellError) => {
    if(error) {
      console.log(error, '||| error');
    }
    if(shellOut) {
      console.log(shellOut, '||| shellOut');
    }
    if(shellError) {
      console.log(shellError, '||| shellError');
    }

    // Read data from json file
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
  });
}

module.exports = { getLightHouseScore };
