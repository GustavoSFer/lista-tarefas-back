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
const service_1 = __importDefault(require("../service"));
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield service_1.default.read();
    return res.status(200).json(task);
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task, status } = req.body;
    const result = yield service_1.default.create({ task, status });
    return res.status(201).json(result);
});
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, task, status } = req.body;
    const resultUpdate = yield service_1.default.update(id, task, status);
    if (!resultUpdate)
        return next({ error: 404, message: 'Task não existe!' });
    return res.status(200).json(resultUpdate);
});
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    console.log(id);
    const delTask = yield service_1.default.remove(id);
    if (!delTask)
        return next({ error: 404, message: 'Task não existe!' });
    return res.status(200).json(delTask);
});
exports.default = {
    read,
    create,
    update,
    remove,
};
