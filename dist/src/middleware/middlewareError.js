"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, req, res, _next) => res.status(err.error).json({ message: err.message });
exports.default = error;
