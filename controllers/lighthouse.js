const fs = require('fs');

function getLightHouseScore(req, res) {
  const { exec } = require('child_process');
  const readJsonFile = require('../services/json-output');
  const url = req.query.url;
  const fileName = 'metrics/metrics.json';
  const lighthouseShellCommand = `lighthouse ${url} --chrome-flags='--headless' --output json --output-path ${fileName}`;

  if (fs.existsSync('./metrics/metrics.json')) {
    fs.unlinkSync('./metrics/metrics.json');
  }

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
    readJsonFile.readJsonFile(res);
  });
}

module.exports = { getLightHouseScore };
