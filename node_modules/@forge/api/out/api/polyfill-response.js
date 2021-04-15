"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformResponse = void 0;
const node_fetch_1 = require("node-fetch");
exports.transformResponse = (fetchApi) => async (url, init) => {
    const response = await fetchApi(url, init);
    return Object.assign(Object.assign({}, response), { headers: new node_fetch_1.Headers(response.headers) });
};
