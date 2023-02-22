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
    entrance: new Date("Feb 14 2023 10:30 GMT-0300"),
    exit: new Date("Feb 14 2023 11:30 GMT-0300"),
    amount: 7.0,
    isFinished: true,
  },
  {
    id: uuidv4(),
    plate: "DAC-3035",
    name: "Letícia Nascimento",
    entrance: new Date("Feb 15 2023 07:30 GMT-0300"),
    exit: new Date("Feb 15 2023 09:30 GMT-0300"),
    amount: 14.0,
    isFinished: false,
  },
  {
    id: uuidv4(),
    plate: "AFG-2051",
    name: "Maria Pereira",
    entrance: new Date("Feb 16 2023 09:30 GMT-0300"),
    exit: new Date("Feb 16 2023 12:30 GMT-0300"),
    amount: 21.0,
    isFinished: true,
  },
  {
    id: uuidv4(),
    plate: "WDS-5487",
    name: "José Roberto",
    entrance: new Date("Feb 17 2023 08:30 GMT-0300"),
    exit: new Date("Feb 17 2023 10:00 GMT-0300"),
    amount: 10.5,
    isFinished: false,
  },
  {
    id: uuidv4(),
    plate: "PHJ-4526",
    name: "Bruna Gonçalves",
    entrance: new Date("Feb 18 2023 11:30 GMT-0300"),
    exit: new Date("Feb 18 2023 13:00 GMT-0300"),
    amount: 10.5,
    isFinished: true,
  },
  {
    id: uuidv4(),
    plate: "NGP-2021",
    name: "Gustavo Oliveira",
    entrance: new Date("Feb 19 2023 11:30 GMT-0300"),
    exit: new Date("Feb 19 2023 14:00 GMT-0300"),
    amount: 17.5,
    isFinished: false,
  },
];

export function HomeContainer() {
  const [vehiclesDB, setVehiclesDB] = useState<VehiclesProps[]>(registeredVehicles);
  const [vehicles, setVehicles] = useState<VehiclesProps[]>(registeredVehicles);
  const [newVehicle, setNewVehicle] = useState("");

  const [errorMessage] = useState("Preencha no formato correto.");

  const [description, setDescription] = useState("");

  function handleInsertNewVehicle(event: FormEvent) {
    event.preventDefault();

    setVehicles(vehicles);
    const aux = newVehicle.split("-");

    if (
      typeof aux[0] == "undefined" ||
      typeof aux[1] == "undefined" ||
      typeof aux[2] == "undefined"
    ) {
      setNewVehicle(errorMessage);
      return;
    }

    const newPlace = `${aux[0]}-${aux[1]}`;

    const newVehicles = [
      ...vehiclesDB,
      {
        id: uuidv4(),
        plate: newPlace.trim(),
        name: aux[2].trim(),
        entrance: new Date(),
        exit: new Date(),
        amount: 7.0,
        isFinished: false,
      },
    ];

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

  // function selectOptions(event: FormEvent) {
  //   event.preventDefault();

  //   setDescription(event.target.value)

  //   console.log(description)
  // }

  console.log(description)
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleInsertNewVehicle}>
        <input
          type="text"
          placeholder="ABC-2124 - Wellington Mangueira"
          name="newVehicle"
          value={newVehicle}
          onChange={updateNewVehicleValue}
          required
          className={setNewVehicle == undefined ? styles.errorMessage : ''}
        />
        <select onChange={e => setDescription(e.target.value)} value={description} name="description">
          <option>Pesquisar por</option>
          <option>Placa</option>
          <option>Nome</option>
          <option>Data</option>
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
