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
class CastCharacter {
    constructor(conn = connection_1.default) {
        this.conn = conn;
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.conn.execute('SELECT * FROM cartoon.Cast_Character WHERE id = ?', [id]);
            return result;
        });
    }
    findByCast(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.conn.execute(`SELECT CA.name, CH.name FROM cartoon.Cast_Characters AS CC
        INNER JOIN cartoon.Casts AS CA ON CA.id = CC.cast_id
        INNER JOIN cartoon.Characters AS CH ON CH.id = CC.character_id
        WHERE CC.cast_id = ?
      `, [id]);
            const [castCharacter] = result;
            return castCharacter[0];
        });
    }
    findByCharacter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.conn.execute(`SELECT Ca.name AS cast, Ch.name AS 'character' FROM cartoon.Cast_Characters AS CC
      JOIN cartoon.Casts AS Ca ON Ca.id = CC.cast_id
      JOIN cartoon.Characters AS Ch ON Ch.id = CC.character_id
      WHERE Ch.id = ?;`, [id]);
            const [castCharacters] = result;
            return castCharacters[0];
        });
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.conn.execute(`INSERT INTO cartoon.CastCharacters(
        cast_id, character_id
      ) VALUES (?, ?);`, [obj.castId, obj.characterId]);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.conn.execute(`SELECT Ca.name AS cast, Ch.name AS 'character' FROM cartoon.Cast_Characters AS CC
      JOIN cartoon.Casts AS Ca ON Ca.id = CC.cast_id
      JOIN cartoon.Characters AS Ch ON Ch.id = CC.character_id;`);
            const [castCharacters] = result;
            return castCharacters;
        });
    }
}
exports.default = CastCharacter;
