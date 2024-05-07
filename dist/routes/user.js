"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../controllers/users");
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router.get('/', users_1.getUsers);
exports.default = router;
//# sourceMappingURL=user.js.map