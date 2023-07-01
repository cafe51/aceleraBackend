"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ErrorHandler_1 = __importDefault(require("./middlewares/ErrorHandler"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/health', (_req, res) => res.status(200).end());
app.use('/characters', routes_1.characterRouter);
app.use('/casts', routes_1.castRouter);
app.use('/castCharacters', routes_1.castCharacterRouter);
app.use(ErrorHandler_1.default);
exports.default = app;
