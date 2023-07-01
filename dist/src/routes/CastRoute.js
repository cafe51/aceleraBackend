"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Cast_1 = require("../controllers/Cast");
const castRouter = (0, express_1.Router)();
castRouter.get('/', Cast_1.list);
castRouter.get('/:id', Cast_1.find);
castRouter.post('/', Cast_1.create);
exports.default = castRouter;
