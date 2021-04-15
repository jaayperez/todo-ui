import { GlobalStorage } from './global-storage';
import { ListOptions } from './queries';
import { QueryBuilder, Condition, Result, ListResult } from './storage-adapter';
export declare class DefaultQueryBuilder implements QueryBuilder {
    private globalStorage;
    private queryOptions;
    constructor(globalStorage: Pick<GlobalStorage, 'list'>, queryOptions?: ListOptions);
    where(field: 'key', { condition, value }: Condition): QueryBuilder;
    cursor(cursor: string): QueryBuilder;
    limit(limit: number): QueryBuilder;
    getOne(): Promise<Result | undefined>;
    getMany(): Promise<ListResult>;
}
//# sourceMappingURL=query-api.d.ts.map