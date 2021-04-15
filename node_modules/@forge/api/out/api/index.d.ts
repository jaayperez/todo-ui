import { RequestInfo, RequestInit } from 'node-fetch';
import { FetchAPI } from '..';
export { transformResponse } from './polyfill-response';
export declare type FetchWrapper = (fetchApi: Function) => (url: RequestInfo, init?: RequestInit) => any;
export declare const wrapFetchApiMethods: (api: any, wrapFetch: FetchWrapper) => FetchAPI;
//# sourceMappingURL=index.d.ts.map