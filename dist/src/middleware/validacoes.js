"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Joi_1 = __importDefault(require("../Joi"));
const statusError_1 = __importDefault(require("../Joi/statusError"));
const validationTask = (req, _res, next) => {
    const { error } = Joi_1.default.validate(req.body);
    if (error !== undefined) {
        const erroStatus = (0, statusError_1.default)(error.details[0].type);
        const middlewareError = { error: erroStatus, message: error.details[0].message };
        return next(middlewareError);
    }
    next();
};
exports.default = {
    validationTask,
};
