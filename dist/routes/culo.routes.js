"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const culo_controlles_1 = require("../controllers/culo.controlles");
const router = express_1.Router();
router.route('/culos').get(culo_controlles_1.getAllCulos);
exports.default = router;
//# sourceMappingURL=culo.routes.js.map