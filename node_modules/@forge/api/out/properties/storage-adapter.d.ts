export interface StorageAdapter {
    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<void>;
    delete(key: string): Promise<void>;
}
//# sourceMappingURL=storage-adapter.d.ts.map