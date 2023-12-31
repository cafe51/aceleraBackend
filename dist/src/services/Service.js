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
class Service {
    constructor(model) {
        this.model = model;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.create(obj);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.list();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find(id);
        });
    }
    update(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.model;
            if (model.update === undefined) {
                throw new Error('Não é possível atualizar este item');
            }
            yield model.update(id, obj);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.model;
            if (model.delete === undefined) {
                throw new Error('Não é possível deletar este item');
            }
            yield model.delete(id);
        });
    }
}
exports.default = Service;
