import { CurrencyDollar } from "phosphor-react";
import { VehiclesProps } from "./HomeContainer";
import styles from "./RegisteredVehicle.module.css";

import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";

interface VehicleProps {
  vehicle: VehiclesProps;
}

export function RegisteredVehicle({ vehicle }: VehicleProps) {
  console.log(vehicle);

  const { id, plate, name, entrance, exit, amount } = vehicle;

  const entranceDateFormatted = format(entrance, "d 'de' MMMM 'às' HH:mm:ss'h'", {
    locale: ptBR,
   });

  console.log(entranceDateFormatted)

  const exitDateFormatted = format(exit, "d 'de' MMMM 'às' HH:mm:ss'h'", {
    locale: ptBR,
  });

  const amountFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount)

  return (
    <div className={styles.dataContainer}>
      <strong>{plate}</strong>
      <p>{name}</p>
      <time
        dateTime={entrance.toISOString()}
      >{entranceDateFormatted}</time>
      <time
        dateTime={exit.toISOString()}
      >{exitDateFormatted}</time>
      <span>{amountFormatted}</span>
      <button type="submit" title="Pagar">
        <CurrencyDollar size={35} />
      </button>
    </div>
  );
}
