const { expect } = require('chai');

const { _validator } = require('../../../lib/validators/NIST/asciiValidator.js');


describe('asciiValidator', function () {
  const VALID = 'foobar';
  const INVALID = 'fooϪbar';

  it('returns an empty object if candidate string contains only ASCII characters', function () {
    const result = _validator(VALID);
    expect(result).to.deep.equal({});
  });

  it('returns an object with `error` if candidate string contains non-ASCII character', function () {
    const result = _validator(INVALID);
    expect(result).to.deep.equal({ error: 'Error - can only use ASCII characters' });
  });
});
