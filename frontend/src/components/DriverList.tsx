import React, { useEffect, useState } from "react";
import axios from "axios";

interface Driver {
  id: number;
  name: string;
  licensePlate: string;
  kilometers: number;
}

const DriverList: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  useEffect(() => {
    axios.get("http://backend:8080/drivers")
      .then((res) => setDrivers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Lista de Motoristas</h1>
      <ul>
        {drivers.map((driver) => (
          <li key={driver.id}>
            {driver.name} - {driver.licensePlate} ({driver.kilometers} km)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;
