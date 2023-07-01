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
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryModel_1 = require("../../src/models/MemoryModel");
const Cast_1 = require("../../src/services/Cast");
let memoryModel;
let castService;
describe('Cast', () => {
    beforeEach(() => {
        memoryModel = new MemoryModel_1.SimpleMemoryModel();
        castService = new Cast_1.CastService(memoryModel);
    });
    describe('Create', () => {
        it('deve criar um novo cast', () => __awaiter(void 0, void 0, void 0, function* () {
            yield castService.create({
                name: 'zambs'
            });
            const expected = { name: 'zambs' };
            expect(yield castService.list()).toEqual(expect.arrayContaining([expect.objectContaining(expected)]));
        }));
        it('deve gerar um erro ao tentar criar um novo cast com nome inválido', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(() => __awaiter(void 0, void 0, void 0, function* () { return yield castService.create({ name: 'Ad' }); })).rejects.toHaveProperty('message', 'O nome precisa ter pelo menos 3 caracteres');
        }));
    });
    describe('Find', () => {
        it('deve encontrar um cast existente', () => __awaiter(void 0, void 0, void 0, function* () {
            yield castService.create({
                name: 'zambs'
            });
            const expected = { name: 'zambs' };
            expect(yield castService.find(0)).toEqual(expect.objectContaining(expected));
        }));
        it('não deveria encontrar um cast inexistente', () => __awaiter(void 0, void 0, void 0, function* () {
            yield castService.create({
                name: 'John'
            });
            expect(yield castService.find(1)).toEqual(null);
        }));
    });
});
