import Cards from "../Cards/Index.js";
import styles from "./css/Index.module.css";
import React from "react";

/* Função que vai preencher dinamicamente as informações dos cartões de Backend */
const Backend = () => {
  return (
    <div className={styles.cardDiv}>
      <Cards
        img="https://images.unsplash.com/photo-1549545931-59bf067af9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        nome="Rebecca Luiz Silva"
        cargo="Backend Developer"
        numeroTelefone="(61)9-955565654"
        email="reb.luiz112564@gmail.com"
      />

      <Cards
        img="https://images.unsplash.com/photo-1599577180589-0a0b958016b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        nome="Gercina Gomes"
        cargo="Backend Developer"
        numeroTelefone="(11)9-12345678"
        email="cina.553@hotmail.com"
      />

      <Cards
        img="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        nome="Thancredo Águas"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-12345678"
        email="this.is.thancred3@gmail.com"
      />

      <Cards
        img="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        nome="Antonio Lisboa"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-12345678"
        email="antonio.lisboa.gomes555@gmail.com"
      />
    </div>
  );
};

export default Backend;
