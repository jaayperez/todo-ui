"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = exports.getErrorMessage = exports.getErrorMessageFromCode = void 0;
exports.getErrorMessageFromCode = (code, message) => {
    return message !== null && message !== void 0 ? message : code;
};
exports.getErrorMessage = (statusCode) => {
    switch (statusCode) {
        case 400:
        case 413:
            return 'Bad request';
        case 401:
            return 'Authentication error';
        case 403:
        case 404:
            return 'Permissions error or key does not exist';
        case 409:
            return 'Conflicting update occurred';
        case 500:
            return 'Internal server error';
        default:
            return `Unknown error. Received status code '${statusCode}'`;
    }
};
class APIError extends Error {
    constructor(message) {
        super(message);
    }
    static forStatus(status) {
        return new APIError(exports.getErrorMessage(status));
    }
    static forErrorCode(code, message) {
        return new APIError(exports.getErrorMessageFromCode(code, message));
    }
    static forUnexpected(message) {
        return new APIError(message);
    }
}
exports.APIError = APIError;
