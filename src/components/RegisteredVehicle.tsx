import { CurrencyDollar } from "phosphor-react";
import { VehiclesProps } from "./HomeContainer";
import styles from "./RegisteredVehicle.module.css";

import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";
import { useState } from "react";

interface VehicleProps {
  vehicle: VehiclesProps;
}

export function RegisteredVehicle({ vehicle }: VehicleProps) {
  const [isFinished] = useState(vehicle.isFinished);
  const [finished, setFinished] = useState(isFinished);
  const [inProgress, setInProgress] = useState(isFinished);

  //console.log(vehicle);

  const { id, plate, name, entrance, exit, amount } = vehicle;

  const entranceDateFormatted = format(entrance, "d 'de' MMMM 'às' HH:mm:ss'hs'", {
    locale: ptBR,
   });

  //console.log(entranceDateFormatted)

  const exitDateFormatted = format(exit, "d 'de' MMMM 'às' HH:mm:ss'hs'", {
    locale: ptBR,
  });

  const amountFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);

  return (
    <div className={styles.dataContainer}>
      <strong className={finished ? styles.finished : styles.inProgress} >{plate}</strong>
      <p>{name}</p>
      <time className={styles.entrance} dateTime={entrance.toISOString()}>
        {entranceDateFormatted}
      </time>
      <time className={styles.exit} dateTime={exit.toISOString()}>
        {exitDateFormatted}
      </time>
      <span>{amountFormatted}</span>
      <button type="submit" title="Pagar">
        <CurrencyDollar size={35} />
      </button>
    </div>
  );
}
