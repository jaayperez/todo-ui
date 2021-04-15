Common library for both Forge environment and Harmonised Connect app environment.

Usage example:

```javascript
import fetch, { RequestInit } from 'node-fetch';

import { GlobalStorage } from './global-storage';
import { APIResponse, getStorageInstanceWithQuery } from './index';

const API_BASE = 'https://api.atlassian.com';

// For user agent header
const version = '0.0.1';
const appAri = 'ari:cloud:ecosystem::app/...';

// For Storage service auth
const appContextAri = 'ari:cloud:jira::site/...';
const token = '...';

async function apiClient(path: string, init: RequestInit): Promise<APIResponse> {
  const url = API_BASE + path;

  const extraHeaders = {
    // See add-forge-user-agent.ts
    'User-Agent': `H11n/${version} ${appAri}`,
    'X-Forge-Context': appContextAri,

    Authorization: `Bearer ${token}`

    // Only required when accessing Storage service via the GraphQL gateway
    // https://api.atlassian.com/graphql
    // 'X-ExperimentalApi': 'AppEntityStorage'
  };

  init.headers = Object.assign(init.headers!, extraHeaders);
  return fetch(url, init);
}

const adapter = new GlobalStorage(() => appContextAri, apiClient);
const storage = getStorageInstanceWithQuery(adapter);

async function demo() {
  await storage.set('key', 'value');
  console.log(await storage.get('key'));
  await storage.delete('key');
}

demo();
```
