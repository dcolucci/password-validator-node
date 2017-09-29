const fs = require('fs');

const ENCODING = 'utf8';

// use fileName from args or default file
let fileName =  process.argv[2];
fileName = fileName || 'commonPasswords.txt';

// make sure file exists and we have read permissions
// see: https://nodejs.org/api/fs.html#fs_fs_accesssync_path_mode
try {
  fs.accessSync(fileName, fs.constants.R_OK);
} catch (err) {
  throw err;
}

// read contents and store to array
const data = fs.readFileSync(fileName, ENCODING);
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
