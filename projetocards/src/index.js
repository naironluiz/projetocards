import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* Importar o app */
import App from "./App";

/* Capturando o root do html em uma variavel */
const root = document.getElementById("root");

/* Renderizando o projeto */
ReactDOM.render(<App />, root);
