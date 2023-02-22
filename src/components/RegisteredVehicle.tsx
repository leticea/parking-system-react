import { CurrencyDollar } from "phosphor-react";
import { VehiclesProps } from "./HomeContainer";
import styles from "./RegisteredVehicle.module.css";

import ptBR from "date-fns/locale/pt-BR";
import { format, setHours, setMinutes } from "date-fns";
import { useState } from "react";

interface VehicleProps {
  vehicle: VehiclesProps;
  removeVehicle: (id: string) => void;
}

export function RegisteredVehicle({ vehicle, removeVehicle }: VehicleProps) {
  const [isFinished] = useState(vehicle.isFinished);

  function handleRemoveVehicle(id: string) {
    removeVehicle(id);
  }

  //console.log(vehicle);

  const { id, plate, name, entrance, exit, amount } = vehicle;

  const entranceDateFormatted = format(
    entrance,
    "d 'de' MMMM 'às' HH:mm:ss'hs'",
    {
      locale: ptBR,
    }
  );

  const exitDateFormatted = exit
    ? format(exit, "d 'de' MMMM 'às' HH:mm:ss'hs'", {
        locale: ptBR,
      })
    : null;

  const amountFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);

  return (
    <div className={styles.dataContainer}>
      <strong className={isFinished ? styles.finished : styles.inProgress}>
        {plate}
      </strong>
      <p className={isFinished ? styles.finished : styles.inProgress}>{name}</p>
      <time
        className={isFinished ? styles.finished : styles.inProgress}
        dateTime={entrance.toString()}
      >
        {entranceDateFormatted}
      </time>
      {exit ? (
        <time
          className={isFinished ? styles.finished : styles.inProgress}
          dateTime={exit.toString()}
        >
          {exitDateFormatted}
        </time>
      ) : (
        ""
      )}
      <span className={isFinished ? styles.finished : styles.inProgress}>
        {amountFormatted}
      </span>
      <button type="submit" title="Finalizar">
        <CurrencyDollar
          size={35}
          onClick={() => handleRemoveVehicle(vehicle.id)}
        />
      </button>
    </div>
  );
}