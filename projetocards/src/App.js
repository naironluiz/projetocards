import Info from "./components/Info/Info";
import CardDiv from "./components/CardDiv/Index";
import Separador from "./components/Separador/Index.js";

const App = () => {
  return (
    <div>
      <Separador separador="Frontend" />
      <CardDiv />
      <Separador separador="Backend" />
      <CardDiv />
      <Separador separador="Design UX/UI" />
      <CardDiv />
    </div>
  );
};

export default App;
