import { RequestInit } from 'node-fetch';
import { APIResponse } from '../';
export declare const URL = "/app/report-accounts";
export declare const LIMIT = 90;
export declare type Account = {
    accountId: string;
    updatedAt: string;
};
export declare type AccountUpdate = {
    accountId: string;
    status: 'updated' | 'closed';
};
export declare const createReportPersonalData: (requestAtlassian: (url: string, init: RequestInit) => Promise<APIResponse>) => (accounts: Account[]) => Promise<AccountUpdate[]>;
//# sourceMappingURL=index.d.ts.map