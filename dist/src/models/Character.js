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
const connection_1 = __importDefault(require("../database/connection"));
class CharacterModel {
    constructor(conn = connection_1.default) {
        this.conn = conn;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.conn.execute('INSERT cartoon.Characters (name) VALUES (?);', [obj.name]);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.conn.execute('SELECT * FROM cartoon.Characters');
            return result;
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.conn.execute('SELECT * FROM cartoon.Characters WHERE id = ?', [id]);
            console.log('result do find character:', result);
            const [character] = result;
            return character[0];
        });
    }
}
exports.default = CharacterModel;
