"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query_api_1 = require("../query-api");
const conditions_1 = require("../conditions");
describe('DefaultQueryBuilder', () => {
    function newGlobalStorage() {
        return {
            list: jest.fn()
        };
    }
    it('should fetch multiple values', async () => {
        const globalStorage = newGlobalStorage();
        const queryResults = [
            {
                key: 'test',
                value: {}
            }
        ];
        globalStorage.list.mockResolvedValue({
            results: queryResults,
            nextCursor: 'next'
        });
        const { results, nextCursor } = await new query_api_1.DefaultQueryBuilder(globalStorage).getMany();
        expect(results).toEqual(queryResults);
        expect(nextCursor).toEqual('next');
        expect(globalStorage.list).toHaveBeenCalledWith({});
    });
    describe('getSingle', () => {
        it.each([
            [{ key: 'test', value: {} }, [{ key: 'test', value: {} }]],
            [undefined, []]
        ])('Should return %o when getting %o from list API', async (value, listResult) => {
            const globalStorage = newGlobalStorage();
            globalStorage.list.mockResolvedValue({
                results: listResult
            });
            const result = await new query_api_1.DefaultQueryBuilder(globalStorage).getOne();
            expect(result).toEqual(value);
            expect(globalStorage.list).toHaveBeenCalledWith(expect.objectContaining({
                limit: 1
            }));
        });
    });
    it('should allow specifying a cursor', async () => {
        const globalStorage = newGlobalStorage();
        await new query_api_1.DefaultQueryBuilder(globalStorage).cursor('cursor').getMany();
        expect(globalStorage.list).toHaveBeenCalledWith(expect.objectContaining({
            cursor: 'cursor'
        }));
    });
    it('should allow specifying a condition', async () => {
        const globalStorage = newGlobalStorage();
        await new query_api_1.DefaultQueryBuilder(globalStorage).where('key', conditions_1.startsWith('test')).getMany();
        expect(globalStorage.list).toHaveBeenCalledWith(expect.objectContaining({
            where: [
                {
                    field: 'key',
                    condition: 'STARTS_WITH',
                    value: 'test'
                }
            ]
        }));
    });
    it('should allow specifying a limit', async () => {
        const globalStorage = newGlobalStorage();
        await new query_api_1.DefaultQueryBuilder(globalStorage).limit(10).getMany();
        expect(globalStorage.list).toHaveBeenCalledWith(expect.objectContaining({
            limit: 10
        }));
    });
});
