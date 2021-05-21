"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.posRoutes = exports.preRoutes = void 0;
const err_1 = __importDefault(require("./err"));
const err_404_1 = __importDefault(require("./err/err_404"));
const token_1 = __importDefault(require("./token"));
const secure_1 = __importDefault(require("./secure"));
/** Middleware PreRoutes */
const preRoutes = (app) => {
    app.use(secure_1.default);
    app.use(token_1.default);
    //app.use(upload);
    //app.use(uploads);
};
exports.preRoutes = preRoutes;
/** Middleware PostRoutes */
const posRoutes = (app) => {
    //app.use(file_files_err);
    app.use(err_1.default);
    app.use(err_404_1.default);
};
exports.posRoutes = posRoutes;
//# sourceMappingURL=index.js.map