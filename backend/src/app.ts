import express from "express";
import { AppDataSource } from "./data-source";
import driverRoutes from "./routes/driverRoutes";

const app = express();
app.use(express.json());

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });
  

AppDataSource.initialize()
  .then(() => {
    app.listen(8080, () => console.log("Servidor rodando na porta 8080"));
  })
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));
