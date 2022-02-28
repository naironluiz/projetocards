import styles from "./Index.module.css";
import AtivarBotao from "./Botao";

import React from "react";
const Cards = (props) => {
  return (
    /* Container onde irão ficar todos os cartões */
    <div className={styles.cardWrapper}>
      {/* Container especifico dos cartões e tudo dentro deles */}
      <div className={styles.cardContainer}>
        {/* Botão de menu */}
        <AtivarBotao />
        {/* Lista de botões do menu */}

        {/* Foto de perfil */}
        <img src={props.img} alt="" className={styles.profileImg} />
        {/* Container com as informações */}
        <div className={styles.infoContainer}>
          {/* Nome */}
          <h1 className={styles.nome}>{props.nome}</h1>
          {/* Cargo */}
          <div className="teste"></div>
          <h3 className={styles.cargo}>{props.cargo}</h3>
          {/* Numero de Telefone */}

          <h1 className={styles.numeroTelefone}>{props.numeroTelefone}</h1>
          {/* Email */}

          <h1 className={styles.email}>{props.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cards;
