import { CurrencyDollar } from "phosphor-react";
import styles from "./HomeContainer.module.css";

export function HomeContainer() {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <input type="text" placeholder="Digite a placa..." />
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
          <time>
            Entrada
          </time>
          <time>
            Saída
          </time>
          <span>Valor</span>
        </header>
        <div className={styles.infoContainer}>
          <strong>ABC-1425</strong>
          <p>Letícia Mangueira</p>
          <time title="15 de fevereiro de 2023" dateTime="2023-02-15 11:30:02">15/02/23 às 11:30:01</time>
          <time title="15 de fevereiro de 2023" dateTime="2023-02-15 12:30:01">15/02/23 às 12:30:05</time>
          <span>R$ 30,00</span>
          <button type="submit">
            <CurrencyDollar size={20} />
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
}
