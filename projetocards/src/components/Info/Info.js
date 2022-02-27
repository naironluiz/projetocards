import Cards from "../Cards";

/* Função que vai preencher dinamicamente as informações dos cartões */
const Info = () => {
  return (
    <div>
      <Cards
        img="https://media.discordapp.net/attachments/935611068934418472/944197874185547786/20220218_084447.jpg?width=507&height=676"
        nome="Nairon Luiz"
        cargo="Frontend Developer"
        numeroTel="(61)9-98454560"
        email="nairon.luiz@gmail.com"
      />
    </div>
  );
};

export default Info;
