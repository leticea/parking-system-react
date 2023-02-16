import { ChangeEvent, FormEvent, useState } from "react";
import { CurrencyDollar, PlusCircle } from "phosphor-react";
import styles from "./HomeContainer.module.css";
import { v4 as uuidv4} from "uuid";
import { RegisteredVehicles } from "./RegisteredVehicles";

interface VehicleProps {
  id: string;
  plate: string;
  name: string;
  entrance: Date;
  exit: Date;
 }

let registeredVehicles = [
  {
    id : uuidv4(),
    plate: "ABC-2526",
    name: "João",
    entrance: new Date("2023-02-15T10:30:00Z"),
    exit: new Date("2023-02-15T11:30:00Z"),
  },
  {
    id : uuidv4(),
    plate: "ADC-3035",
    name: "Letícia",
    entrance: new Date("2023-02-16T11:30:00Z"),
    exit: new Date("2023-02-16T12:30:00Z"),
  },
  {
    id : uuidv4(),
    plate: "AFG-2026",
    name: "Maria",
    entrance: new Date("2023-02-17T14:30:00Z"),
    exit: new Date("2023-02-17T15:30:00Z"),
  }
]

export function HomeContainer() {
  const [vehicles, setVehicles] = useState<VehicleProps[]>(registeredVehicles);
  const [newVehicle, setNewVehicle] = useState("");

  function handleInsertNewVehicle(event: FormEvent) {
    event.preventDefault();

    const vehicleData = newVehicle.split('-');

    console.log(registeredVehicles);
  }

  console.log(newVehicle);

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
          <strong>ABC-1425</strong>
          <p>Letícia Mangueira</p>
          <time title="15 de fevereiro de 2023" dateTime="2023-02-15 11:30:02">
            15/02/23 às 11:30:01
          </time>
          <time title="15 de fevereiro de 2023" dateTime="2023-02-15 12:30:01">
            15/02/23 às 12:30:05
          </time>
          <span>R$ 30,00</span>
          <button type="submit" title="Pagar">
            <CurrencyDollar size={35} />
          </button>
        </div>
      </div>
    </div>
  );
}
function uuid() {
  throw new Error("Function not implemented.");
}

