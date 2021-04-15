export declare const getErrorMessageFromCode: (code: string, message: string | null) => string;
export declare const getErrorMessage: (statusCode: number) => string;
export declare class APIError extends Error {
    private constructor();
    static forStatus(status: number): APIError;
    static forErrorCode(code: string, message: string | null): APIError;
    static forUnexpected(message: string): APIError;
}
//# sourceMappingURL=errors.d.ts.map