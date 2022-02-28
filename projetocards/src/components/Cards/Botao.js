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
    </div>
  );
}

export default AtivarBotao;
