import React, { useState } from "react";
import Error from "./Error";

const Pregunta = () => {
  //Definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // Funcion q lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  //Submit presupuesto que
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //Validar el presupuesto
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    //si se pasa la validacion
    setError(false);
  };

  return (
    <>
      <h2>Coloca Tu Presupuesto</h2>
      {error ? <Error /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca Tu Presupuesto"
          onChange={definirPresupuesto}
        ></input>
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        ></input>
      </form>
    </>
  );
};

export default Pregunta;
