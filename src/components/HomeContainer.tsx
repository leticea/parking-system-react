import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { RegisteredVehicle } from "./RegisteredVehicle";

import { PlusCircle } from "phosphor-react";
import styles from "./HomeContainer.module.css";

export interface VehiclesProps {
  id: string;
  plate: string;
  name: string;
  entrance: Date;
  exit?: Date;
  amount: number;
  isFinished: boolean;
}

let registeredVehicles = [
  {
    id: uuidv4(),
    plate: "ABC-2526",
    name: "João Mangueira",
    entrance: new Date("2023-02-14T10:30:00Z"),
    exit: new Date("2023-02-14T11:30:00Z"),
    amount: 7.0,
    isFinished: true,
  },
  {
    id: uuidv4(),
    plate: "DAC-3035",
    name: "Letícia Nascimento",
    entrance: new Date("2023-02-15T10:30:00Z"),
    exit: new Date("2023-02-15T12:30:00Z"),
    amount: 14.0,
    isFinished: false,
  },
  {
    id: uuidv4(),
    plate: "AFG-2051",
    name: "Maria Pereira",
    entrance: new Date("2023-02-16T12:30:00Z"),
    exit: new Date("2023-02-16T15:30:00Z"),
    amount: 21.0,
    isFinished: true,
  },
  {
    id: uuidv4(),
    plate: "WDS-5487",
    name: "José Roberto",
    entrance: new Date("2023-02-16T12:30:00Z"),
    exit: new Date("2023-02-16T16:30:00Z"),
    amount: 28.0,
    isFinished: false,
  },
  {
    id: uuidv4(),
    plate: "PHJ-4526",
    name: "Bruna Gonçalves",
    entrance: new Date("2023-02-16T14:30:00Z"),
    exit: new Date("2023-02-16T16:00:00Z"),
    amount: 10.50,
    isFinished: true,
  },
  {
    id: uuidv4(),
    plate: "NGP-2021",
    name: "Gustavo Oliveira",
    entrance: new Date("2023-02-16T14:30:00Z"),
    exit: new Date("2023-02-16T17:00:00Z"),
    amount: 17.50,
    isFinished: false,
  },
];

export function HomeContainer() {
  const [vehiclesDB, setVehiclesDB] = useState<VehiclesProps[]>(registeredVehicles);
  const [vehicles, setVehicles] = useState<VehiclesProps[]>(registeredVehicles);
  const [newVehicle, setNewVehicle] = useState("");

  function handleInsertNewVehicle(event: FormEvent) {
    event.preventDefault();

    setVehicles(vehicles);

    const aux = newVehicle.split('-');

    const newVehicles = [
      ...vehiclesDB,
      {
        id: uuidv4(),
        plate: aux[0].trim(),
        name: aux[1].trim(),
        entrance: new Date(),
        amount: 7.0,
        isFinished: false,
      },
    ];
    console.log('222')

    setVehiclesDB(newVehicles);
    setNewVehicle("");
  }

  function updateNewVehicleValue(event: ChangeEvent<HTMLInputElement>) {
    const filteredVehicles = vehiclesDB.filter((vehicle) =>
      vehicle.name.toLowerCase().includes(newVehicle.toLowerCase())
    );

    setNewVehicle(event.target.value);
    setVehicles(filteredVehicles);
  }

  function removeVehicle(id: string) {
    const parkedVehicles = vehicles.filter((vehicle) => {
      return vehicle.id !== id;
    });

    setVehicles(parkedVehicles);
  }

  useEffect(() => {
    setVehicles(vehiclesDB);
  }, [newVehicle == ""]);

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

      <div className={styles.infoDataContainer}>
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
            return (
              <RegisteredVehicle
                vehicle={vehicle}
                removeVehicle={removeVehicle}
                key={vehicle.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
