/**
 * Compose a validator function to include base validation functionality,
 * including error handling and message enrichment
 *
 * @param {function} validator - validator function to compose
 * @returns {function} composed function
 */
const baseValidator = function (validator) {
  if (typeof validator !== 'function') {
    throw new TypeError('Error - must pass a function to baseValidator');
  }

  return function (candidate) {
    if (typeof candidate !== 'string') {
      throw new TypeError('Error - password must be string');
    }

    const result = validator(candidate) || {};
    if (result.error) {
      const error = `${candidate} -> ${result.error}`;
      return { error };
    }

    return {};
  }
};


module.exports = { baseValidator };
