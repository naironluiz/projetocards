import Cards from "../Cards/Index.js";
import styles from "./css/Index.module.css";
/* Função que vai preencher dinamicamente as informações dos cartões */
const Frontend = () => {
  return (
    <div className={styles.cardDiv}>
      <Cards
        img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        nome="Rebecca Luiz Silva"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-955565654"
        email="reb.luiz@gmail.com"
      />

      <Cards
        img="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        nome="João Carlos"
        cargo="Frontend Developer"
        numeroTelefone="(11)9-12345678"
        email="jc.553@hotmail.com"
      />

      <Cards
        img="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        nome="Thancredo Águas"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-12345678"
        email="this.is.thancred@gmail.com"
      />

      <Cards
        img="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        nome="Antonio Lisboa"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-12345678"
        email="antonio.lisboa.gomes@gmail.com"
      />
    </div>
  );
};

export default Frontend;
