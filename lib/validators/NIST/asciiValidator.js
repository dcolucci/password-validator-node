const { baseValidator } = require('../baseValidator.js');

const ASCII_RE = /^[\x00-\x7F]*$/;


/**
 * Validate that candidate contains only ASCII characters
 *
 * @param {string} candidate - candidate password to validate
 * @returns {object} result of validation
 */
const validator = function (candidate) {
  if (!ASCII_RE.test(candidate)) {
    return { error: 'Error - can only use ASCII characters' };
  }

  return {};
};

const asciiValidator = baseValidator(validator);


// export unwrapped validator for testing
module.exports = {
  _validator: validator,
  asciiValidator
};
