const { expect } = require('chai');
const { stub } = require('sinon');
const { baseValidator } = require('../../lib/validators/baseValidator.js');


describe('baseValidator', function () {
  let validatorStub;
  let result;

  beforeEach(function () {
    validatorStub = stub();
  });

  it('throws if not passed a function', function () {
    expect(baseValidator).to.throw;
    expect(baseValidator.bind(null, 'foo')).to.throw;
    expect(baseValidator.bind(null, [])).to.throw;
  });

  it('returns a function', function () {
    const result = baseValidator(validatorStub);
    expect(result).to.be.a('function');
  });

  describe('composed function', function () {
    let composedFunc;

    beforeEach(function () {
      composedFunc = baseValidator(validatorStub);
    });

    it('throws if not passed a string', function () {
      expect(composedFunc).to.throw;
      expect(composedFunc.bind(null, 42)).to.throw;
      expect(composedFunc.bind(null, [])).to.throw;
    });

    it('returns an object', function () {

      const result = composedFunc('foo');
      expect(result).to.be.an('object');
    });

    describe('if validator returns `error`', function () {
      it('returns an object containing `error`', function () {
        validatorStub.returns({ error: 'error!' });
        composedFunc = baseValidator(validatorStub);
        const result = composedFunc('foo');
        expect(result).to.deep.equal({ error: 'foo -> error!' });
      });
    });

    describe('if validator returns no `error`', function () {
      it('returns empty object', function () {
        validatorStub.returns({});
        composedFunc = baseValidator(validatorStub);
        const result = composedFunc('foo');
        expect(result).to.deep.equal({});
      });

      it('returns an empty object if validator returns undefined', function () {
        validatorStub.returns(undefined);
        composedFunc = baseValidator(validatorStub);
        const result = composedFunc('foo');
        expect(result).to.deep.equal({});
      });
    });
  });
});
