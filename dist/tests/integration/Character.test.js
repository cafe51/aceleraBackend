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
describe('## POST /characters', function () {
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        yield (0, queryUtils_1.executeQueries)(connection_1.default, dropQuery);
        yield (0, queryUtils_1.executeQueries)(connection_1.default);
    }));
    afterAll(() => __awaiter(this, void 0, void 0, function* () {
        yield (0, queryUtils_1.executeQueries)(connection_1.default, dropQuery);
        yield connection_1.default.end();
    }));
    test('Deve criar um novo character', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default)
                .post('/characters')
                .send({ name: 'Liza Simpsons' });
            expect(response.status).toEqual(201);
        });
    });
    test('Não deve criar um character com nome menor que 3 caracteres', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default)
                .post('/characters')
                .send({ name: 'Zé' });
            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('O nome do character precisa ter no minimo 3 caracteres');
        });
    });
    test('Não deve criar um character sem o campo "name"', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default)
                .post('/characters')
                .send('Zé');
            expect(response.status).toEqual(400);
            expect(response.body.message).toEqual('Name é requerido');
        });
    });
});
