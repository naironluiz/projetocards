import styles from "./Index.module.css";
import PropTypes from "prop-types";
/* importando o botão */
import AtivarBotao from "./Botao";

import React from "react";
/* inserindo os valores */
const Cards = ({ img, nome, cargo, numeroTelefone, email }) => {
  return (
    /* Container onde irão ficar todos os cartões */
    <div className={styles.cardWrapper}>
      {/* Container especifico dos cartões e tudo dentro deles */}
      <div className={styles.cardContainer}>
        {/* Botão de menu */}
        <AtivarBotao />
        {/* Lista de botões do menu */}

        {/* Foto de perfil */}
        <img src={img} alt="" className={styles.profileImg} />
        {/* Container com as informações */}
        <div className={styles.infoContainer}>
          {/* Nome */}
          <h1 className={styles.nome}>{nome}</h1>
          {/* Cargo */}
          <h3 className={styles.cargo}>{cargo}</h3>
          {/* Numero de Telefone */}

          <h1 className={styles.numeroTelefone}>{numeroTelefone}</h1>
          {/* Email */}

          <h1 className={styles.email}>{email}</h1>
        </div>
      </div>
    </div>
  );
};

/* Validação de valores */
Cards.propTypes = {
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  numeroTelefone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

/* Valor Default caso esteja faltando algo */
Cards.defaultProps = {
  nome: "Nome faltando",
  cargo: "Cargo faltando",
  numeroTelefone: "Telefone faltando",
  email: "Email faltando",
};

export default Cards;
