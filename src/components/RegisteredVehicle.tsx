import { CurrencyDollar } from "phosphor-react";
import { VehiclesProps } from "./HomeContainer";
import styles from "./RegisteredVehicle.module.css";

import ptBR from "date-fns/locale/pt-BR";
import { format } from "date-fns";

import { formatInTimeZone } from "date-fns-tz";

interface VehicleProps {
  vehicle: VehiclesProps;
}

export function RegisteredVehicle({ vehicle }: VehicleProps) {
  console.log(vehicle);

  const { id, plate, name, entrance, exit, amount } = vehicle;

  const entranceDateFormatted = format(entrance, "d 'de' LLLL 'às' HH:mm:ss'h'", {
    locale: ptBR,
   });

  console.log(entranceDateFormatted)

  // const exitDateFormatted = format(exit, "d 'de' LLLL 'às' HH:mm'h'", {
  //   locale: ptBR,
  // });

  return (
    <div className={styles.dataContainer}>
      <strong>{plate}</strong>
      <p>{name}</p>
      <time
        title={entranceDateFormatted}
        dateTime={entrance.toISOString()}
      ></time>
      {/* <time
        title={exitDateFormatted}
        dateTime={exit.toISOString()}
      ></time> */}
      <span>{amount}</span>
      <button type="submit" title="Pagar">
        <CurrencyDollar size={35} />
      </button>
    </div>
  );
}
