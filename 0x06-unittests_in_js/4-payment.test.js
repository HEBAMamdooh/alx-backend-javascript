// Test suite for sendPaymentRequestToApi with Sinon stub
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi with stub', function () {
  it('should stub Utils.calculateNumber to always return 10', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert(stub.calledOnceWithExactly('SUM', 100, 20));
    assert(spy.calledOnceWithExactly('The total is: 10'));

    stub.restore();  // Restore the stub
    spy.restore();   // Restore the spy
  });
});
