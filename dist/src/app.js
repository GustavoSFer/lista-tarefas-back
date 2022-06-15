"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewareError_1 = __importDefault(require("./middleware/middlewareError"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use(router_1.default);
app.use(middlewareError_1.default);
app.listen(PORT, () => console.log(`Rodando na posta ${PORT}`));
