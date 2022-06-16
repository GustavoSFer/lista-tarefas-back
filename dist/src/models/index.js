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
const connectionDb_1 = __importDefault(require("./connectionDb"));
const read = () => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield connectionDb_1.default.find();
    return task;
});
const create = (tarefa) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield connectionDb_1.default.create(tarefa);
    console.log(task);
    return {
        _id: task._id,
        task: tarefa.task,
        status: tarefa.status,
    };
});
const update = (id, task, status) => __awaiter(void 0, void 0, void 0, function* () {
    const updateTask = yield connectionDb_1.default.updateOne({ _id: id, task, status });
    return {
        _id: id,
        task,
        status,
    };
});
exports.default = {
    read,
    create,
    update,
};
