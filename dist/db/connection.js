"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize({
    database: "ts_rest_server",
    dialect: "mysql",
    username: "root",
    password: "",
    host: "localhost",
    port: 3306
});
exports.default = db;
//# sourceMappingURL=connection.js.map