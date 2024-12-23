"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const Driver_1 = require("./entities/Driver");
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize();
        const driverRepo = data_source_1.AppDataSource.getRepository(Driver_1.Driver);
        const drivers = [
            { name: "João Silva", licensePlate: "ABC1234", kilometers: 1020 },
            { name: "Maria Lima", licensePlate: "XYZ5678", kilometers: 450 },
        ];
        yield driverRepo.save(drivers);
        console.log("Seed concluído!");
        process.exit(0);
    });
}
seed();
