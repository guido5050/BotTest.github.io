import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Boton from "./Ui/Title";
import "./App.css";
import Title from "./Ui/Title";

function App() {
  const [count, setCount] = useState(0);
  const [mostrar, setMostrar] = useState(false);



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="animate-fade-down">App de prueba para Chatbot</h1>
      <div className="card">
        <button onClick={() => setMostrar(true)}>Mostrar texto</button>
      </div>
      {mostrar && <Title></Title>}
    </>
  );
}

export default App;
