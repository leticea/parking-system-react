import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { RegisteredVehicle } from "./RegisteredVehicle";

import { PlusCircle } from "phosphor-react";
import styles from "./HomeContainer.module.css";


export interface VehiclesProps {
  id: string;
  plate: string;
  name: string;
  entrance: Date;
  exit: Date;
  amount: number;
}

let registeredVehicles = [
  {
    id: uuidv4(),
    plate: "ABC-2526",
    name: "João",
    entrance: new Date("2023-02-14T10:30:00Z"),
    exit: new Date("2023-02-14T11:30:00Z"),
    amount: 200.0,
  },
  {
    id: uuidv4(),
    plate: "ADC-3035",
    name: "Letícia",
    entrance: new Date("2023-02-15T11:30:00Z"),
    exit: new Date("2023-02-15T12:30:00Z"),
    amount: 200.0,
  },
  {
    id: uuidv4(),
    plate: "AFG-2026",
    name: "Maria",
    entrance: new Date("2023-02-16T14:30:00Z"),
    exit: new Date("2023-02-16T15:30:00Z"),
    amount: 200.0,
  },
  {
    id: uuidv4(),
    plate: "AFG-2026",
    name: "Maria",
    entrance: new Date("2023-02-16T14:30:00Z"),
    exit: new Date("2023-02-16T15:30:00Z"),
    amount: 200.0,
  },
  {
    id: uuidv4(),
    plate: "AFG-2026",
    name: "Maria",
    entrance: new Date("2023-02-16T14:30:00Z"),
    exit: new Date("2023-02-16T15:30:00Z"),
    amount: 200.0,
  },
  {
    id: uuidv4(),
    plate: "AFG-2026",
    name: "Maria",
    entrance: new Date("2023-02-16T14:30:00Z"),
    exit: new Date("2023-02-16T15:30:00Z"),
    amount: 200.0,
  },
];

export function HomeContainer() {
  const [vehicles, setVehicles] = useState<VehiclesProps[]>(registeredVehicles);
  const [newVehicle, setNewVehicle] = useState("");

  function handleInsertNewVehicle(event: FormEvent) {
    event.preventDefault();

    setVehicles(vehicles);

    const newVehicles = [
      ...vehicles,
      {
        id: uuidv4(),
        plate: newVehicle,
        name: newVehicle,
        entrance: new Date(),
        exit: new Date(),
        amount: 200.0,
      },
    ];

    setVehicles(newVehicles);
    setNewVehicle("");
    //const vehicleData = newVehicle.split('-');

    console.log(newVehicles);
  }

  //console.log(newVehicle);

  function updateNewVehicleValue(event: ChangeEvent<HTMLInputElement>) {
    setNewVehicle(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleInsertNewVehicle}>
        <input
          type="text"
          placeholder="ABC-2124 - Wellington Mangueira"
          name="newVehicle"
          value={newVehicle}
          onChange={updateNewVehicleValue}
        />
        <select>
          <option value="search">Pesquisar por</option>
          <option value="plate">Placa</option>
          <option value="name">Nome</option>
          <option value="date">Data</option>
        </select>
        <button type="submit">
          Adicionar <PlusCircle />
        </button>
      </form>

      <div className={styles.watchlistContainer}>
        <header>
          <strong>Placa</strong>
          <p>Nome</p>
          <p>Entrada</p>
          <p>Saída</p>
          <span>Valor</span>
          <p className={styles.ref}>#</p>
        </header>

        <div className={styles.infoContainer}>
          {vehicles.map((vehicle) => {
            return <RegisteredVehicle vehicle={vehicle} key={vehicle.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
