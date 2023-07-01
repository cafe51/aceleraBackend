"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const connection_1 = __importDefault(require("../../src/database/connection"));
const queryUtils_1 = require("../../src/database/queryUtils");
const dropQuery = (0, queryUtils_1.readQueries)('dropDatabase.sql');
describe('Cast', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, queryUtils_1.executeQueries)(connection_1.default, dropQuery);
        yield (0, queryUtils_1.executeQueries)(connection_1.default);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, queryUtils_1.executeQueries)(connection_1.default, dropQuery);
        yield connection_1.default.end();
    }));
    it('deve criar um novo cast', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post('/casts').send({ name: 'Tatiana' });
        expect(result.status).toEqual(201);
    }));
    it('deve retornar 400 ao criar cast invalido', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).post('/casts').send();
        expect(result.status).toEqual(400);
    }));
    it('deve listar um cast', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).get('/casts');
        expect(result.status).toEqual(200);
        expect(result.body).toEqual([{ id: 198, name: 'Dan Castellaneta' }]);
    }));
    it('deve listar dois cast', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).post('/casts').send({ name: 'cast1' });
        yield (0, supertest_1.default)(app_1.default).post('/casts').send({ name: 'cast2' });
        const result = yield (0, supertest_1.default)(app_1.default).get('/casts');
        expect(result.body).toEqual(expect.arrayContaining([
            expect.objectContaining({ name: 'cast1' }),
            expect.objectContaining({ name: 'cast2' }),
        ]));
    }));
    it('deve encontrar um cast', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).post('/casts').send({ name: 'cast1' });
        const result = yield (0, supertest_1.default)(app_1.default).get('/casts/199');
        expect(result.status).toEqual(200);
        expect(result.body).toEqual({ id: 199, name: 'cast1' });
    }));
    it('deve retornar 404 quando nao encontrar um cast', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_1.default)(app_1.default).post('/casts').send({ name: 'cast1' });
        const result = yield (0, supertest_1.default)(app_1.default).get('/casts/0');
        expect(result.status).toEqual(404);
    }));
});
