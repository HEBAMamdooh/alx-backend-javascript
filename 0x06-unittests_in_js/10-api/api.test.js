const request = require('request');
const { expect } = require('chai');

describe('Available payments endpoint', () => {
    it('Returns correct payment methods', (done) => {
        request('http://localhost:7865/available_payments', (error, response, body) => {
            const expectedResponse = {
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            };
            expect(JSON.parse(body)).to.deep.equal(expectedResponse);
            done();
        });
    });
});

describe('Login endpoint', () => {
    it('Returns correct message for POST /login', (done) => {
        request.post({
            url: 'http://localhost:7865/login',
            json: { userName: 'Betty' }
        }, (error, response, body) => {
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});
