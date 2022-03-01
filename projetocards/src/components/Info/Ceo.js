import Cards from "../Cards/Index.js";
import styles from "./css/Index.module.css";
/* Função que vai preencher dinamicamente as informações dos cartões */
const Ceo = () => {
  return (
    <div className={styles.cardDiv}>
      <Cards
        img="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        nome="Sergio Amad"
        cargo="Founder & CEO"
        numeroTelefone="(11)921345675"
        email="sergio.amad@gmail.com"
      />
    </div>
  );
};

export default Ceo;
