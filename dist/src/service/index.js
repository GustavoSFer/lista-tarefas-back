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
const models_1 = __importDefault(require("../models"));
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield models_1.default.read();
    return task;
});
const create = (tarefa) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield models_1.default.create(tarefa);
    return task;
});
const update = (id, task, status) => __awaiter(void 0, void 0, void 0, function* () {
    const updteTask = yield models_1.default.update(id, task, status);
    if (!updteTask)
        return undefined;
    return updteTask;
});
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const delTask = yield models_1.default.remove(id);
    if (!delTask)
        return undefined;
    return delTask;
});
exports.default = {
    read,
    create,
    update,
    remove,
};
