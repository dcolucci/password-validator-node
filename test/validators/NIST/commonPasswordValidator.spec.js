const { expect } = require('chai');

const { _validator } = require('../../../lib/validators/NIST/commonPasswordValidator.js');


describe('commonPasswordValidator', function () {
  commonPasswords = {
    foo: 1
  };
  const VALID = 'notOnList'
  const INVALID = 'foo';

  it('returns an empty object if candidate string is NOT in common passwords list', function () {
    const result = _validator(commonPasswords, VALID);
    expect(result).to.deep.equal({});
  });

  it('returns an object with `error` if candidate string is in common passwords list', function () {
    const result = _validator(commonPasswords, INVALID);
    expect(result).to.deep.equal({ error: 'Error: password is part of common passwords list and cannot be used' });
  });
});
