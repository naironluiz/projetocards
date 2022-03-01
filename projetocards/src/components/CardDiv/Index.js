import styles from "./Index.module.css";
import Info from "../Info/Info";
import Backend from "../Info/Backend";

const CardDiv = () => {
  return (
    <div className={styles.cardDiv}>
      <Info />
      <Info />
      <Info />
    </div>
  );
};

export default CardDiv;
