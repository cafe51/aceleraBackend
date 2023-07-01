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
require("jest");
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const connection_1 = __importDefault(require("../../src/database/connection"));
const queryUtils_1 = require("../../src/database/queryUtils");
describe('App', () => {
    it('deve retornar 404 ao acessar uma pagina invalida', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, supertest_1.default)(app_1.default).get('/invalid');
        expect(result.status).toEqual(404);
    }));
    it('deve retornar 500 caso nao tenha database', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, queryUtils_1.executeQueries)(connection_1.default, (0, queryUtils_1.readQueries)('dropDatabase.sql'));
        yield connection_1.default.end();
        console.error = jest.fn();
        const result = yield (0, supertest_1.default)(app_1.default).get('/casts');
        expect(result.status).toEqual(500);
    }));
});
