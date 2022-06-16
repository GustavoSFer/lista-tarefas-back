"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller"));
const validacoes_1 = __importDefault(require("../middleware/validacoes"));
const route = (0, express_1.Router)();
route.get('/', controller_1.default.read);
route.post('/', validacoes_1.default.validationTask, controller_1.default.create);
route.put('/', validacoes_1.default.validationUpdate, controller_1.default.update);
exports.default = route;
