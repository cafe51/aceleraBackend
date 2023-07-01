"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.castRouter = exports.castCharacterRouter = exports.characterRouter = void 0;
const CastCharacterRoute_1 = __importDefault(require("./CastCharacterRoute"));
exports.castCharacterRouter = CastCharacterRoute_1.default;
const CastRoute_1 = __importDefault(require("./CastRoute"));
exports.castRouter = CastRoute_1.default;
const CharacterRoute_1 = __importDefault(require("./CharacterRoute"));
exports.characterRouter = CharacterRoute_1.default;
