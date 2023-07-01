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
exports.CastCharacterService = void 0;
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
const CastCharacter_1 = __importDefault(require("../models/CastCharacter"));
const Service_1 = __importDefault(require("./Service"));
class CastCharacterService extends Service_1.default {
    constructor(model = new CastCharacter_1.default()) {
        super(model);
    }
    create(obj) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (!obj.castId && !obj.characterId) {
                throw new BadRequest_1.default('Obrigatório passar castId e characterId');
            }
            return _super.create.call(this, obj);
        });
    }
    findByCast(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByCast(id);
        });
    }
    findByCharacter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByCharacter(id);
        });
    }
}
exports.CastCharacterService = CastCharacterService;
