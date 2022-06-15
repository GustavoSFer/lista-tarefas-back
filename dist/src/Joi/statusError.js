"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusErrorString = (msg) => {
    switch (msg) {
        case 'string.base':
            return 422;
        case 'string.min':
            return 422;
        case 'string.max':
            return 422;
        default:
            return 400;
    }
};
exports.default = statusErrorString;
