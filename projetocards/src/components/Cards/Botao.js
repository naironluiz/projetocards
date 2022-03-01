import React, { useState } from "react";
import styles from "./Index.module.css";

function AtivarBotao() {
  /* setar como falso */
  const [isActive, setActive] = useState(false);

  return (
    /* Uma vez que essa div seja clicado, será togglado como ativo e vice e versa.*/
    <div
      className={`${styles.menuBtn} ${isActive ? `${styles.active}` : ""}`}
      onClick={() => setActive(!isActive)}
    >
      ...
      {/* O toggle serve para ativar o css dessa lista */}
      <ul className={styles.listaOpc}>
        <li>Alterar Foto</li>
        <li>Mudar Nome</li>
        <li>Mudar Cargo</li>
        <li>Mudar Telefone</li>
        <li>Mudar Email</li>
      </ul>
    </div>
  );
}

export default AtivarBotao;
