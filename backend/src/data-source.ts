import { DataSource } from "typeorm";
import { Driver } from "./entities/Driver";
import { Ride } from "./entities/Ride";
import "reflect-metadata"; // Deve ser importado antes de qualquer inicialização do TypeORM

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: ["dist/entities/*.js"], // Arquivos JS após compilação
  migrations: ["dist/migration/*.js"], // Arquivos JS após compilação
  synchronize: true,
});

export default AppDataSource;
