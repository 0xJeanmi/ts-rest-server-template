import { Sequelize } from "sequelize";

const db = new Sequelize({
    database: "ts_rest_server",
    dialect: "mysql",
    username: "root",
    password: "",
    host: "localhost",
    port: 3306
});

export default db;