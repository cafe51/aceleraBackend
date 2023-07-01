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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryModel = exports.SimpleMemoryModel = void 0;
class SimpleMemoryModel {
    constructor() {
        this.memory = [];
        this.idCounter = 0;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            this.memory.push(Object.assign(Object.assign({}, obj), { id: this.idCounter }));
            this.idCounter++;
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.memory.find((item) => item.id === id) || null;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return [...this.memory];
        });
    }
}
exports.SimpleMemoryModel = SimpleMemoryModel;
class MemoryModel extends SimpleMemoryModel {
    update(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            this.memory = this.memory.map((item) => item.id === id ? Object.assign(Object.assign({}, obj), { id: id }) : item);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.memory = this.memory.filter((item) => item.id !== id);
        });
    }
}
exports.MemoryModel = MemoryModel;
