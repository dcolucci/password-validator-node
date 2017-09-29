const { expect } = require('chai');

const {
  MIN_LENGTH,
  _validator
} = require('../../../lib/validators/NIST/minLengthValidator.js');


describe('minLengthValidator', function () {
  const VALID = 'a'.repeat(MIN_LENGTH);
  const INVALID = 'a'.repeat(MIN_LENGTH - 1);

  it('returns an empty object if candidate string is less than max length', function () {
    const result = _validator(VALID);
    expect(result).to.deep.equal({});
  });

  it('returns an object with `error` if candidate string is greater than max length', function () {
    const result = _validator(INVALID);
    expect(result).to.deep.equal({ error: `Error: Too Short - minimum length is ${MIN_LENGTH}` });
  });
});
