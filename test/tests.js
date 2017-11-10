const chai = require('chai');
const should = require('chai').should();
const assert = chai.assert;
const expect = chai.expect;
const Add = require('../math');
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
