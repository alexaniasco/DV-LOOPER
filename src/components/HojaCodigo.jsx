import React from "react";
import { Link } from "react-router-dom";

import EjemploDeCodigo from "./EjemploDeCodigo";
import "./HojaCodigo.css";
export const HojaCodigo = () => {
  const text = document.getElementById("9274");
  console.log(text);
  return (
    <div className="hoja">
      <div className="hojatext">
        <div className="datos"></div>
        <div className="grid_main">
          <EjemploDeCodigo
            codigo={`   
 .Sort()

El método sort() en JavaScript se utiliza para ordenar los elementos de un array. Por defecto, el método sort() ordena los elementos del array en orden alfabético, pero se pueden proporcionar funciones de comparación personalizadas para ordenar los elementos de una manera diferente.
 
La sintaxis básica para utilizar sort() es la siguiente:
 
array.sort()
 
Este método modifica el array original y devuelve el array ordenado. Aquí hay un ejemplo sencillo de cómo utilizar sort() para ordenar un array de números en orden ascendente:
 `}
          ></EjemploDeCodigo>
          <EjemploDeCodigo
            className="ej"
            codigo={`


   
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function EjemploDeCodigo(props) {
  return (
    <div>
      <SyntaxHighlighter language="javascript" style={dark}>
        {props.codigo}
      </SyntaxHighlighter>
    </div>
  );
}

export default EjemploDeCodigo;`}
          ></EjemploDeCodigo>

          <div className="grid_2"></div>
        </div>
        <iframe
          title="code"
          className="ifra"
          src="https://codepen.io/alexaniasco/embed/JjaYXMa"
        ></iframe>
        <Link to={"/home"}>
          <button>HOME</button>
        </Link>
        <Link to={"/landing"}>
          <button>asdasd</button>
        </Link>
      </div>
    </div>
  );
};
