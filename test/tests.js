const chai = require('chai');
const should = require('chai').should();
const assert = chai.assert;
const expect = chai.expect;
const Add = require('../math');
const IsAlive = require('../functions');
const sinon = require('sinon');

describe('Spy Tests', function() {
  it('should log result of add', function() {
    let num1 = 1;
    let num2 = 2;

    let logSpy = sinon.spy();
    Add(num1, num2, logSpy);

    logSpy.called.should.be.true;
  });

  it('should call log with result of add', function() {
    let num1 = 1;
    let num2 = 2;

    let logSpy = sinon.spy();
    Add(num1, num2, logSpy);

    logSpy.calledWith(3).should.be.true;
  });
});

describe('IsAlive Tests', function() {
  it('should return true when ping callback returns true', function() {
    let pinger = sinon.stub();
    pinger.returns(true);

    let websiteIsAlive = IsAlive(pinger);

    websiteIsAlive.should.be.true;
  });

  it('should return true when ping returns true three times in a row', function() {
    let pinger = sinon.stub();
    pinger.onFirstCall().returns(true);
    pinger.onSecondCall().returns(true);
    pinger.onThirdCall().returns(true);

    let websiteIsAlive = IsAlive(pinger);

    websiteIsAlive.should.be.true;
  });

  it('should return false when ping does not return true three times in a row', function() {
    let pinger = sinon.stub();
    pinger.onFirstCall().returns(true);
    pinger.onSecondCall().returns(false);
    pinger.onThirdCall().returns(true);

    let websiteIsAlive = IsAlive(pinger);
    websiteIsAlive.should.be.false;
  });

  it('should return an error when ping throws an error', function() {
    let pinger = sinon.stub();

    pinger.throws(function() { return new Error(); });
    let error = IsAlive(pinger);

    error.message.should.equal('ping threw exception');
  });
});

// using 'should' format
// describe('Addition Test', function() {

  // it('should return 3 when passed 1 and 2', function() {
  //   let num1 = 1;
  //   let num2 = 2;

  //   let expectedResult = 3;
  //   let actualResult = Add(num1, num2);

  //   actualResult.should.equal(expectResult);

  // });

  // // using 'expect' format
  // it('should return 3 when passed 1 and 2', function() {
  //   let num1 = 1;
  //   let num2 = 2;

  //   let expectedResult = 3;
  //   let actualResult = Add(num1, num2);

  //   actualResult.should.equal(expectedResult);
  //   expect(actualResult).to.equal(expectedResult);
  // });

  // using 'assert' format
  // it('should return not 3 when passed 1 and 4', function() {
  //   let num1 = 1;
  //   let num2 = 4;

  //   let unexpectedResult = 3;
  //   let actualResult = Add(num1, num2);

  //   actualResult.should.not.equal(unexpectedResult);
  //   expect(actualResult).to.not.equal(unexpectedResult);
  //   assert.notEqual(actualResult, expected, "[message]");
  // });
// });
