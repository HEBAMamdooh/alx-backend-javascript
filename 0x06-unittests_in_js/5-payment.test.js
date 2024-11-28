// Test suite with hooks (beforeEach, afterEach)
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi with hooks', function () {
  let spy;

  beforeEach(function () {
    spy = sinon.spy(console, 'log'); // Set up the spy before each test
  });

  afterEach(function () {
    spy.restore();  // Clean up the spy after each test
  });

  it('should log the correct total when totalAmount = 100 and totalShipping = 20', function () {
    sendPaymentRequestToApi(100, 20);
    assert(spy.calledOnceWithExactly('The total is: 120'));
  });

  it('should log the correct total when totalAmount = 10 and totalShipping = 10', function () {
    sendPaymentRequestToApi(10, 10);
    assert(spy.calledOnceWithExactly('The total is: 20'));
  });
});
