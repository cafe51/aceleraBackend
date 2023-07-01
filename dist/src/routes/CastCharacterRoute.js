"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CastCharacter_1 = require("../controllers/CastCharacter");
const castCharacterRouter = (0, express_1.Router)();
castCharacterRouter.get('/', CastCharacter_1.list);
castCharacterRouter.get('/search', CastCharacter_1.find);
castCharacterRouter.post('/', CastCharacter_1.create);
exports.default = castCharacterRouter;
