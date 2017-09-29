const { baseValidator } = require('../baseValidator.js');

const MIN_LENGTH = 8;


/**
 * Validate that candidate is greater than min length
 *
 * @param {string} candidate - candidate password to validate
 * @returns {object} result of validation
 */
const validator = function (candidate) {
  if (candidate.length < MIN_LENGTH) {
    return { error: `Error: Too Short - minimum length is ${MIN_LENGTH}` };
  }

  return {};
};

const minLengthValidator = baseValidator(validator);


// export unwrapped validator and constant for testing
module.exports = {
  _validator: validator,
  MIN_LENGTH,
  minLengthValidator
};
