"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const driverRoutes_1 = __importDefault(require("./routes/driverRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/drivers", driverRoutes_1.default);
data_source_1.AppDataSource.initialize()
    .then(() => {
    app.listen(8080, () => console.log("Servidor rodando na porta 8080"));
})
    .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));
