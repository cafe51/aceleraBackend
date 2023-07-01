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
exports.CastService = void 0;
const BadRequest_1 = __importDefault(require("../errors/BadRequest"));
const Cast_1 = __importDefault(require("../models/Cast"));
const Service_1 = __importDefault(require("./Service"));
class CastService extends Service_1.default {
    constructor(model = new Cast_1.default()) {
        super(model);
        this.MIN_LENGTH = 3;
    }
    create(obj) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (obj.name.length < this.MIN_LENGTH) {
                throw new BadRequest_1.default('O nome precisa ter pelo menos 3 caracteres');
            }
            return _super.create.call(this, obj);
        });
    }
}
exports.CastService = CastService;
