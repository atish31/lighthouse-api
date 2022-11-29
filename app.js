const { exec } = require('child_process');

exec("lighthouse https://www.medium.com --chrome-flags='--headless' --output json --output-path test.json", (error, shellOut, shellError) => {
  if(error) {
    console.log(error, '||| error');
    return;
  }
  if(shellOut) {
    console.log(shellOut, '||| shellOut');
    return;
  }
  if(shellError) {
    console.log(shellError, '||| shellError');
  }
})
