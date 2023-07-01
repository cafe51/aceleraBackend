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
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
const Character_1 = __importDefault(require("../models/Character"));
const Service_1 = __importDefault(require("./Service"));
class CharacterService extends Service_1.default {
    constructor(model = new Character_1.default()) {
        super(model);
        this.MIN_LENGTH = 3;
    }
    create(data) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (data.name.length < this.MIN_LENGTH)
                throw new BadRequest_1.default('O nome do character precisa ter no mínimo 3 caracteres');
            _super.create.call(this, data);
        });
    }
}
exports.default = CharacterService;
