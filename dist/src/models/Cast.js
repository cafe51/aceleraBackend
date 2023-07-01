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
const DATABASE = 'cartoon';
class CastModel {
    constructor(tableName = 'Casts', connection = connection_1.default) {
        this.tableName = tableName;
        this.connection = connection;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`INSERT INTO ${DATABASE}.${this.tableName}(
        name
      ) VALUES (?);`, [obj.name]);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`SELECT id, name
      FROM ${DATABASE}.${this.tableName};`);
            const [casts] = result;
            return casts;
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`SELECT id, name
      FROM ${DATABASE}.${this.tableName} as C WHERE C.id = ?;`, [id]);
            const [casts] = result;
            return casts[0];
        });
    }
}
exports.default = CastModel;
