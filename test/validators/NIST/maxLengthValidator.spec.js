const { expect } = require('chai');

const {
  MAX_LENGTH,
  _validator
} = require('../../../lib/validators/NIST/maxLengthValidator.js');


describe('maxLengthValidator', function () {
  const VALID = 'a'.repeat(MAX_LENGTH);
  const INVALID = 'a'.repeat(MAX_LENGTH + 1);

  it('returns an empty object if candidate string is less than max length', function () {
    const result = _validator(VALID);
    expect(result).to.deep.equal({});
  });

  it('returns an object with `error` if candidate string is greater than max length', function () {
    const result = _validator(INVALID);
    expect(result).to.deep.equal({ error: `Error: Too Long - maximum length is ${MAX_LENGTH}` });
  });
});
