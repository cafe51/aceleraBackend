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
const CastCharacter_1 = require("../services/CastCharacter");
function create(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { castId, characterId } = req.body;
        const castCharacterService = new CastCharacter_1.CastCharacterService();
        try {
            if (castId === undefined || characterId === undefined) {
                throw new BadRequest_1.default('Você precisa enviar o castId e characterId');
            }
            yield castCharacterService.create({ castId, characterId });
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
        const castCharacterService = new CastCharacter_1.CastCharacterService();
        try {
            const { castId, characterId } = req.query;
            if (castId) {
                const cast = yield castCharacterService.findByCast(parseInt(castId, 10));
                return res.status(200).json(cast);
            }
            if (characterId) {
                const character = yield castCharacterService
                    .findByCharacter(parseInt(characterId, 10));
                return res.status(200).json(character);
            }
        }
        catch (err) {
            next(err);
        }
    });
}
exports.find = find;
function list(_req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const castCharacterService = new CastCharacter_1.CastCharacterService();
        try {
            const castCharacterList = yield castCharacterService.list();
            return res.json(castCharacterList);
        }
        catch (err) {
            next(err);
        }
    });
}
exports.list = list;
