import { ChangeEvent, FormEvent, useState } from "react";
import { CurrencyDollar } from "phosphor-react";

import styles from "./HomeContainer.module.css";

export function HomeContainer() {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState("");

  function handleInsertNewVehicle(event: FormEvent) {
    event.preventDefault();

    //newVehicle(event.target.value);


  }

  console.log(newVehicle);
  
  function updateNewVehicleValue(event: ChangeEvent<HTMLInputElement>) {
    setNewVehicle(event.target.value);
  }

  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <input type="text" placeholder="ABC-2124 - Wellington Mangueira" name="vehicle" value={newVehicle} onChange={updateNewVehicleValue} />
        <select>
          <option value="search">Pesquisar por</option>
          <option value="plate">Placa</option>
          <option value="name">Nome</option>
          <option value="date">Data</option>
        </select>
        <button type="submit">Adicionar</button>
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
