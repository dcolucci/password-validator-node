const fs = require('fs');

const ENCODING = 'utf8';

// read default common passwords list
const data = fs.readFileSync('commonPasswords.txt', ENCODING);
const commonPasswordsArr = data.split('\n');

// store passwords to map
const commonPasswords = commonPasswordsArr.reduce((acc, line) => {
  acc[line] = 1;
  return acc;
}, {});

// write common passwords object to JSON file
fs.writeFile('data/commonPasswords.json', JSON.stringify(commonPasswords), (err) => {
  if (err) {
    throw err;
  }
});
