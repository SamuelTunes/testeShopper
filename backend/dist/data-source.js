"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata"); // Deve ser importado antes de qualquer inicialização do TypeORM
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.sqlite",
    entities: ["dist/entities/*.js"], // Arquivos JS após compilação
    migrations: ["dist/migration/*.js"], // Arquivos JS após compilação
    synchronize: true,
});
