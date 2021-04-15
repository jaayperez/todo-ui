"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
describe('APIError', () => {
    describe('forStatus', () => {
        it.each([
            [400, 'Bad request'],
            [413, 'Bad request'],
            [401, 'Authentication error'],
            [403, 'Permissions error or key does not exist'],
            [404, 'Permissions error or key does not exist'],
            [409, 'Conflicting update occurred'],
            [500, 'Internal server error']
        ])('should contain the correct error message for a code of %s', (status, message) => {
            expect(errors_1.APIError.forStatus(status).message).toEqual(message);
        });
        it('should return a generic error message for unexpected status codes', () => {
            expect(errors_1.APIError.forStatus(100).message).toEqual("Unknown error. Received status code '100'");
        });
    });
    describe('forErrorCode', () => {
        it('should return contain the provided message if the error code is in the allow list', () => {
            expect(errors_1.APIError.forErrorCode('INVALID_CURSOR', 'this is an error message').message).toEqual('this is an error message');
        });
        it('should return the error code if no message was provided', () => {
            expect(errors_1.APIError.forErrorCode('INVALID_CURSOR', null).message).toEqual('INVALID_CURSOR');
        });
    });
    describe('forUnexpected', () => {
        it('should return an APIError with a message provided', () => {
            expect(errors_1.APIError.forUnexpected('test').message).toEqual('test');
        });
    });
});
