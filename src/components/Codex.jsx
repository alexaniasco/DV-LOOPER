import React from 'react'
import { useState } from "react";
import "../App.css";
export const Codex = () => {
    const [code, setCode] = useState("");

    const funcioncode = () => {
      const result = [];
      const numbers = [1, 4, 9];
      const doubles = numbers.map((num) => num * 2);
  
      result.push(doubles + " || " + numbers);
      return result;
    };

  return (
    <div className="data">
    <h1 className="titulo_app">Ejecucion de codigo</h1>
    <div className="data_div">
      <code className="codee">
        const result = []
        <br></br>
        const numbers = [1, 4, 9];
        <br></br>
        const doubles = numbers.map((num) => num * 2); result.push(doubles +
        " || " + numbers);
        <br></br>
        return result
      </code>
      <div className="codee2">
        <textarea placeholder={code} readOnly></textarea>
      </div>
      <div className="buton_flex">
        <button onClick={() => setCode(funcioncode())} className="btn btn2">
          RUN
        </button>
        <button onClick={() => setCode("")} className="btn btn1">
          RESET
        </button>
      </div>
    </div>
  </div>
  )
}
