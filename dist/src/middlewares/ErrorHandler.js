"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, _req, res, _next) {
    const { statusCode, message } = err;
    if (statusCode)
        return res.status(statusCode).json({ message });
    return res.status(500).json({ message: 'Internal server error' });
}
exports.default = errorHandler;
