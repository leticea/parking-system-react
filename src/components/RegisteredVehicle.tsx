import { CurrencyDollar } from "phosphor-react";
import { VehiclesProps } from "./HomeContainer";
import styles from "./RegisteredVehicle.module.css";


interface VehicleProps {
  vehicle: VehiclesProps;
}

export function RegisteredVehicle({ vehicle }: VehicleProps) {
  console.log(vehicle)

  const {id, plate, name, entrance, exit, money} = vehicle;

  return (
    <div className={styles.dataContainer}>
      <strong>{plate}</strong>
      <p>{name}</p>
      <time title="15 de fevereiro de 2023" dateTime="2023-02-15 11:30:02">

      </time>
      <time title="15 de fevereiro de 2023" dateTime="2023-02-15 12:30:01">
        15/02/23 às 12:30:05
      </time>
      <span>{money}</span>
      <button type="submit" title="Pagar">
        <CurrencyDollar size={35} />
      </button>
    </div>
  );
}
