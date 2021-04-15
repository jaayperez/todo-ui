import { ProductScopedStorage } from './product-scoped-storage';
export declare class ConfluenceVersionedStorage extends ProductScopedStorage {
    protected versionedSet(key: string, value: any): Promise<void>;
    private getUpdatedVersion;
}
//# sourceMappingURL=confluence-versioned-storage.d.ts.map