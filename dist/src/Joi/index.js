"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const schema = joi_1.default.object({
    task: joi_1.default.string().required().messages({
        'string.base': 'A tarefa precisa ser String',
        'any.required': 'Tarefa obrigatório',
    }),
    status: joi_1.default.string().required().messages({
        'string.base': 'status precisa ser uma string',
        'any.required': 'status obrigatório',
    })
});
exports.default = schema;
