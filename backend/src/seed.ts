import { AppDataSource } from "./data-source";
import { Driver } from "./entities/Driver";

async function seed() {
  await AppDataSource.initialize();

  const driverRepo = AppDataSource.getRepository(Driver);

  const drivers = [
    { name: "João Silva", licensePlate: "ABC1234", kilometers: 1020 },
    { name: "Maria Lima", licensePlate: "XYZ5678", kilometers: 450 },
  ];

  await driverRepo.save(drivers);

  console.log("Seed concluído!");
  process.exit(0);
}

seed();
