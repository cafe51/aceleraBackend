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
const MemoryModel_1 = require("../../src/models/MemoryModel");
const Character_1 = __importDefault(require("../../src/services/Character"));
let memoryModel;
let characterService;
describe('Character', () => {
    beforeEach(() => {
        memoryModel = new MemoryModel_1.MemoryModel();
        characterService = new Character_1.default(memoryModel);
    });
    describe('Create', () => {
        it('deve criar um novo character', () => __awaiter(void 0, void 0, void 0, function* () {
            const expected = {
                name: 'Ada'
            };
            yield characterService.create(expected);
            expect(yield characterService.list()).toEqual(expect.arrayContaining([expect.objectContaining(expected)]));
        }));
        it('deve gerar um erro ao tentar criar um novo character com nome inválido', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(() => __awaiter(void 0, void 0, void 0, function* () {
                return yield characterService.create({
                    name: ''
                });
            })).rejects.toHaveProperty('message', 'O nome do character precisa ter no minimo 3 caracteres');
        }));
    });
    describe('Find', () => {
        beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
            yield characterService.create({
                name: 'Ada'
            });
        }));
        it('deve encontrar um personagem existente', () => __awaiter(void 0, void 0, void 0, function* () {
            const expected = {
                name: 'Ada'
            };
            expect(yield characterService.find(0)).toEqual(expect.objectContaining(expected));
        }));
        it('não deve encontrar um personagem inexistente', () => __awaiter(void 0, void 0, void 0, function* () {
            expect(yield characterService.find(1)).toEqual(null);
        }));
    });
});
