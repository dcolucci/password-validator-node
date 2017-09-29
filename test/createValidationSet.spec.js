const { expect } = require('chai');
const { stub } = require('sinon');
const { createValidationSet } = require('../lib/createValidationSet.js');


describe('createValidationSet', function () {
  it('throws if invoked with non-array', function () {
    expect(createValidationSet).to.throw;
    expect(createValidationSet.bind(null, 'foo')).to.throw;
    expect(createValidationSet.bind(null, {})).to.throw;
  });

  describe('composed function', function () {
    let validatorStub0;
    let validatorStub1;
    let composedFunc;

    beforeEach(function () {
      validatorStub0 = stub().returns({});
      validatorStub1 = stub().returns({});
      composedFunc = createValidationSet([ validatorStub0, validatorStub1 ]);
    });

    it('calls all passed validators', function () {
      composedFunc('foo');
      expect(validatorStub0.calledOnce).to.be.true;
      expect(validatorStub1.calledOnce).to.be.true;
    });

    it('returns an object with `success: true` key if no validation failures', function () {
      const result = composedFunc('foo');
      expect(result).to.deep.equal({ success: true });
    });

    it('returns an object with `success: false` and `errors` key if there are validation failures', function () {
      validatorStub0.returns({ error: 'error!' });
      composedFunc = createValidationSet([ validatorStub0, validatorStub1 ]);
      const result = composedFunc('foo');
      expect(result).to.deep.equal({
        success: false,
        errors: [ 'error!' ]
      });
    });
  });
});
