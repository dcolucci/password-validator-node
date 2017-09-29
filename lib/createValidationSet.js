/**
 * Compose a validation set function to run the passed series of validators
 *
 * @param {array} validators - a set of validation functions that will be run
 *   on the candidate string
 * @returns {function} composed function
 */
const createValidationSet = function (validators) {
  if (!Array.isArray(validators)) {
    throw new TypeError('Error - createValidationSet must be passed an array of validator functions');
  }

  return function (candidate) {
    let setResult = validators.reduce((acc, validator) => {
      const result = validator(candidate);
      if (result.error) {
        if (acc.errors) {
          acc.errors.push(result.error);
        } else {
          acc.errors = [result.error];
        }
      }

      return acc;
    }, {});

    setResult.success = !setResult.errors;
    return setResult;
  };
}


module.exports = { createValidationSet }
