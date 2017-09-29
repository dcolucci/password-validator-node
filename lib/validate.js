const { asciiValidator } = require('./validators/NIST/asciiValidator.js');
const { commonPasswordValidator } = require('./validators/NIST/commonPasswordValidator.js');
const { maxLengthValidator } = require('./validators/NIST/maxLengthValidator.js');
const { minLengthValidator } = require('./validators/NIST/minLengthValidator.js');
const { createValidationSet } = require('./createValidationSet.js');

const validators = [
  asciiValidator,
  commonPasswordValidator,
  maxLengthValidator,
  minLengthValidator
];

// create the default validation set
const validate = createValidationSet(validators);

module.exports = { validate };
