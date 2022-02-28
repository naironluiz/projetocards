import React, { useState } from "react";
import styles from "./Index.module.css";

function AtivarBotao() {
  const [isActive, setActive] = useState(false);

  return (
    <div
      className={`${styles.menuBtn} ${isActive ? `${styles.active}` : ""}`}
      onClick={() => setActive(!isActive)}
    >
      ...
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
