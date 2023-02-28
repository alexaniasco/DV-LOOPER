import React from 'react'
import { useState } from "react";
import "../App.css";
import "./CodexWrite.css"
export const CodexWrite = ({codex}) => {
    const [code, setCode] = useState("");
    

    const funcioncode = () => {
        const result = ["asdasdas"]
        return setCode(result)
    };



  return (
    <div className="data">
    <h1 className="titulo_app">Ejecucion de codigo</h1>
    <div className="data_div">
  
    <code onChange={()=>console.log("asdasdasd")} className="codee">
    
      {codex}
      </code>
  
      <div className="codee2">
        <textarea placeholder={code} readOnly></textarea>
      </div>
      <div className="buton_flex">
        <button onClick={() => funcioncode()} className="btn btn2">
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

