import styles from "./index.module.css";

const separador = (props) => {
  return (
    <>
      <p className={styles.separador}>{props.separador}</p>
    </>
  );
};
export default separador;
