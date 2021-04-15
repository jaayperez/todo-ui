"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultQueryBuilder = void 0;
class DefaultQueryBuilder {
    constructor(globalStorage, queryOptions = {}) {
        this.globalStorage = globalStorage;
        this.queryOptions = queryOptions;
    }
    where(field, { condition, value }) {
        return new DefaultQueryBuilder(this.globalStorage, Object.assign(Object.assign({}, this.queryOptions), { where: [
                {
                    field,
                    condition,
                    value
                }
            ] }));
    }
    cursor(cursor) {
        return new DefaultQueryBuilder(this.globalStorage, Object.assign(Object.assign({}, this.queryOptions), { cursor }));
    }
    limit(limit) {
        return new DefaultQueryBuilder(this.globalStorage, Object.assign(Object.assign({}, this.queryOptions), { limit }));
    }
    async getOne() {
        const { results } = await this.limit(1).getMany();
        if (results && results.length > 0) {
            return results[0];
        }
    }
    async getMany() {
        return this.globalStorage.list(this.queryOptions);
    }
}
exports.DefaultQueryBuilder = DefaultQueryBuilder;
