import Info from "./components/Info/Info";
import CardDiv from "./components/CardDiv/Index";
import Separador from "./components/Separador/Index.js";
import Backend from "./components/Info/Backend";
import Uiux from "./components/Info/Uiux";

const App = () => {
  return (
    <div>
      <Separador separador="Frontend" />
      <CardDiv />
      <Separador separador="Backend" />
      <Backend />
      <Separador separador="Design UX/UI" />
      <Uiux />
    </div>
  );
};

export default App;
