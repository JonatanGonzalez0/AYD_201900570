import React, { useState } from "react";
import "./App.css";

function App() {
  const [info, setInfo] = useState("");

  const mostrarInfo = () => {
    setInfo(`
      Nombre: Jonatan Rene Gonzalez Hernandez 
      Carnet: 201900570 
      Curso: Análisis y Diseño de Sistemas 1
    `);
  };

  return (
    <div className="container">
      <h1>Información del Estudiante</h1>
      <button onClick={mostrarInfo}>Mostrar Información</button>
      {info && <p>{info}</p>}
    </div>
  );
}

export default App;
