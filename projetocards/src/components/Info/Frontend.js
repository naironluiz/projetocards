import Cards from "../Cards/Index.js";
import styles from "./css/Index.module.css";
/* Função que vai preencher dinamicamente as informações dos cartões de Frontend */
const Frontend = () => {
  return (
    <div className={styles.cardDiv}>
      <Cards
        img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        nome="Rebecca Luiz Silva"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-955565654"
        email="reb.luizzz@gmail.com"
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
        email="this.is.thancred33@gmail.com"
      />

      <Cards
        img="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        nome="Antonio Lisboa"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-12345678"
        email="antonio.lisboa.gomes11@gmail.com"
      />

      <Cards
        img="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        nome="Ivana Cajina"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-12345678"
        email="ivana.cajina3@gmail.com"
      />

      <Cards
        img="https://images.unsplash.com/flagged/photo-1573807813964-b8eb2626a50e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        nome="Arthur  Soares Souza"
        cargo="Frontend Developer"
        numeroTelefone="(61)9-12345678"
        email="arthur.soares.souza66@gmail.com"
      />
    </div>
  );
};

export default Frontend;
