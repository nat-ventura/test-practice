const chai = require('chai');
const assert = chai.assert;
const Add = require('../math');
const sinon = require('sinon');

describe('tests Add', function() {
  it('should return 3 when called with 1 and 2', function() {
    let result = Add(1, 2);
    let expectedResult = 3;
    assert.equal(expectedResult, result);
  });
});
