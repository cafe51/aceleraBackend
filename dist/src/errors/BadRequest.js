"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHttpError_1 = __importDefault(require("./BaseHttpError"));
class BadRequest extends BaseHttpError_1.default {
    constructor(message) {
        super(message, 400);
    }
}
exports.default = BadRequest;
