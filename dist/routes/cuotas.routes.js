"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plancuotas_controlles_1 = require("../controllers/plancuotas.controlles");
const router = express_1.Router();
router.route('/plancuotas').get(plancuotas_controlles_1.getAllCuotas);
exports.default = router;
//# sourceMappingURL=cuotas.routes.js.map