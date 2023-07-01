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
exports.list = exports.find = exports.create = void 0;
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
const NotFound_1 = __importDefault(require("../errors/NotFound"));
const Character_1 = __importDefault(require("../services/Character"));
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = req.body;
        const characterService = new Character_1.default();
        try {
            if (!name)
                throw new BadRequest_1.default('Name é requerido');
            yield characterService.create({ name });
            return res.status(201).send('Created');
        }
        catch (err) {
            next(err);
        }
    });
}
exports.create = create;
function find(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const characterService = new Character_1.default();
        try {
            if (id === undefined)
                throw new BadRequest_1.default('Você precisa enviar o id da pesquisa');
            const obj = yield characterService.find(parseInt(id, 10));
            if (!obj)
                throw new NotFound_1.default('Pessoa não encontrada');
            return res.status(200).json(obj);
        }
        catch (err) {
            next(err);
        }
    });
}
exports.find = find;
function list(_req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const characterService = new Character_1.default();
        try {
            const characterList = yield characterService.list();
            return res.json(characterList);
        }
        catch (err) {
            next(err);
        }
    });
}
exports.list = list;
