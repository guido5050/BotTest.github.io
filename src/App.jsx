import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Title from "./Ui/Title";
function App() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-y-8">
        <div>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-[190px] animate-fade-down "
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="animate-fade-down animate-duration-500 animate-delay-500 animate-ease-in text-center">
          App de prueba para Chatbot
        </h1>
        <div className="text-center">
          <button
            type="button"
            onClick={() => setMostrar(true)}
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            {mostrar ? "👁" : "Mostrar texto"}
          </button>
        </div>
        {mostrar && <Title></Title>}
      </div>
    </>
  );
}

export default App;
