const chai = require('chai');
const should = require('chai').should();
const assert = chai.assert;
const expect = chai.expect;
const Add = require('../math');
const IsAlive = require('../functions');
const sinon = require('sinon');

const API = {
  IsAlive: function(address) {
    try {
      let pingOneSuccess = this.Ping(address);
      // let pingTwoSuccess = this.Ping(address);
      // let pingThreeSuccess = this.Ping(address);

      if (pingOneSuccess && pingTwoSuccess && pingThreeSuccess)
        return true;
      return false;

    } catch (e) {
      return new Error('ping threw exception');
    }
  },

  Ping: function(address) {
    return true;
  },

  KillServer: function() {
  }
}

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

  // it('should call ping 3 times', function() {
  //   let mockApi = sinon.mock(API);
  //   mockApi.expects('Ping').exactly(3);

  //   API.IsAlive();

  //   mockApi.verify();
  //   mockApi.restore();
  // });

  it('should call ping at least one time', function() {
    let mockApi = sinon.mock(API);
    mockApi.expects('Ping').atLeast(1);

    API.IsAlive();

    mockApi.verify();
    mockApi.restore();
  });

  it('should not call KillServer', function() {
    let mockApi = sinon.mock(API);
    mockApi.expects('KillServer').never();

    API.IsAlive();

    mockApi.verify;
    mockApi.restore();
  });

  it('should ping the server address that it is passed', function () {
    let address = '1.1.1.1';
    let mockApi = sinon.mock(API);
    mockApi.expects('Ping').withExactArgs(address);
    API.IsAlive(address);

    mockApi.verify();
    mockApi.restore();
  });
});
