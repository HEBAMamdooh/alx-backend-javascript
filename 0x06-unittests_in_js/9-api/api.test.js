const request = require('request');
const { expect } = require('chai');

describe('Cart page', () => {
    it('Correct status code when :id is a number?', (done) => {
        request('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('Correct status code when :id is NOT a number?', (done) => {
        request('http://localhost:7865/cart/hello', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});
