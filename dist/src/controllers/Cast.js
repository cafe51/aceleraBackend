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
const Cast_1 = require("../services/Cast");
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = req.body;
        const castService = new Cast_1.CastService();
        try {
            if (name === undefined) {
                throw new BadRequest_1.default('Você precisa enviar o nome da pessoa atriz');
            }
            yield castService.create({ name });
            res.status(201).send();
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
        const castService = new Cast_1.CastService();
        try {
            if (id === undefined)
                throw new BadRequest_1.default('Você precisa enviar o id da pesquisa');
            const obj = yield castService.find(parseInt(id, 10));
            if (!obj)
                throw new NotFound_1.default('Pessoa atriz não encontrada');
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
        const castService = new Cast_1.CastService();
        try {
            const castList = yield castService.list();
            return res.json(castList);
        }
        catch (err) {
            next(err);
        }
    });
}
exports.list = list;
