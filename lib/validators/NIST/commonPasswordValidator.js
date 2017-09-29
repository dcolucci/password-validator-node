const { baseValidator } = require('../baseValidator.js');

// throw an error if the common passwords data JSON file is not found
let commonPasswords;
try {
 commonPasswords = require('../../../data/commonPasswords.json');
} catch (err) {
  throw new Error('Error - must run `build` script to generate common password data before use');
}


/**
 * Validate candidate against passed list of common passwords
 *
 * @param {object} commonPasswords - map of common passwords
 * @param {string} candidate - candidate password to Validate
 * @returns {object} result of validation
 */
const validator = function (commonPasswords, candidate) {
  if (commonPasswords[candidate]) {
    return {
      error: 'Error: password is part of common passwords list and cannot be used'
    };
  }

  return {};
};

// export the composed function bound to use the generated common passwords data map
const commonPasswordValidator = baseValidator(validator.bind(null, commonPasswords));


// export unwrapped validator for testing
module.exports = {
  _validator: validator,
  commonPasswordValidator
};
