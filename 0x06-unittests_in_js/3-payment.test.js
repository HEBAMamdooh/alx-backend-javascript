// Test suite for sendPaymentRequestToApi using Sinon spy
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with correct arguments', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    assert(spy.calledOnceWithExactly('SUM', 100, 20));
    spy.restore(); // Restore the spy after test
  });
});
