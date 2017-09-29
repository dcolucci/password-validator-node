const { baseValidator } = require('../baseValidator.js');

const MAX_LENGTH = 64;


/**
 * Validate that candidate is less than max length
 *
 * @param {string} candidate - candidate password to validate
 * @returns {object} result of validation
 */
const validator = function (candidate) {
  if (candidate.length > MAX_LENGTH) {
    return { error: `Error: Too Long - maximum length is ${MAX_LENGTH}` };
  }

  return {};
};

const maxLengthValidator = baseValidator(validator);


// export unwrapped validator and constant for testing
module.exports = {
  _validator: validator,
  MAX_LENGTH,
  maxLengthValidator
};
