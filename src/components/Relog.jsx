import React, { useState, useEffect } from "react";
import "./Relog.css"
function Reloj() {
  const [hora, setHora] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      var fecha = new Date();
      var horas = fecha.getHours();
      var minutos = fecha.getMinutes();
      var segundos = fecha.getSeconds();
        if (horas < 10) horas = "0" + horas;
  if (minutos < 10) minutos = "0" + minutos;
  if (segundos < 10) segundos = "0" + segundos;
      setHora(`${horas}:${minutos}:${segundos}`);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <div className="relog">{hora}</div>;
}

export default Reloj;
