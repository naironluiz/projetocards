import styles from "./index.module.css";

const separador = (props) => {
  return (
    <>
      <p className={styles.separador}>
        {props.separador}
        <p className={styles.separador2}>{props.separador}</p>
      </p>
    </>
  );
};
export default separador;
