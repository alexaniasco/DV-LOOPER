import React, { useEffect } from "react";
import "../App.css";
import Reloj from "./Relog";
const audios = require("./BEAT_NUEVO.mp3");

export const Nav = () => {
  var audio = document.getElementById("audio");

 useEffect(() => {
   audio = document.getElementById("audio")
 
  
 }, [])
 
  return (
    <div className="nav">
      <div className="audiocont">
        {" "}
        <audio className="miaudio" id="audio" loop src={audios}></audio>
        
          <div className="cont_btn_audio">
          <button id="play" onClick={()=> audio.play()}>Reproducir</button>
          <button id="pause" onClick={()=> audio.pause()}>Pausar</button>
          </div>
        
      </div>
      <div className="search">
        <input></input>
        <div className="imagenes_concat">
          <a href="#">
            <img
              className="contact"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            ></img>
          </a>
          <a href="#">
            <img
              className="contact"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            ></img>
          </a>
          <a href="#">
            <img
              className="contact"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            ></img>
          </a>
        </div>
        <Reloj></Reloj>
      </div>
    </div>
  );
};
