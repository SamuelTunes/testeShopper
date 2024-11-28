import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Driver } from "../entities/Driver";

const router = Router();

router.get("/", async (req, res) => {
  const driverRepo = AppDataSource.getRepository(Driver);
  const drivers = await driverRepo.find();
  res.json(drivers);
});

export default router;
