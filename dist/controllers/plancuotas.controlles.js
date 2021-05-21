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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCuotas = void 0;
const tedious_1 = require("tedious");
const getAllCuotas = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = new tedious_1.Request("Select * from PlanCuotas", (err, resp) => {
            if (!err) {
                //id - terminal
                console.log(resp.row);
                res.status(200).json({ rows: resp.row });
            }
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllCuotas = getAllCuotas;
//# sourceMappingURL=plancuotas.controlles.js.map