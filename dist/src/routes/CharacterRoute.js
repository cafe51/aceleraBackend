"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Character_1 = require("../controllers/Character");
const characterRoute = express_1.default.Router();
characterRoute.post('/', Character_1.create);
characterRoute.get('/', Character_1.list);
characterRoute.get('/:id', Character_1.find);
exports.default = characterRoute;
