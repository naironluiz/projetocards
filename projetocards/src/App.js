import Ceo from "./components/Info/Ceo";
import Frontend from "./components/Info/Frontend";
import Separador from "./components/Separador/Index.js";
import Backend from "./components/Info/Backend";
import Uiux from "./components/Info/Uiux";

const App = () => {
  return (
    <div>
      <Separador separador="Ceo" />
      <Ceo />
      <Separador separador="Frontend" />
      <Frontend />
      <Separador separador="Backend" />
      <Backend />
      <Separador separador="Design UX/UI" />
      <Uiux />
    </div>
  );
};

export default App;
