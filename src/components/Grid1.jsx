import JSONN from "./objetoJSON";
import React from "react";
import "../App.css";
import { Tarjeta } from "./Tarjeta";
import { TarjetaTech } from "./TarjetaTech";
import { useRef, useEffect, useState } from "react";
const audio = require("./BEAT_NUEVO.mp3");
const img = require("./pngegg.png");


export const Grid1 = () => {
  const miDivRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    miDivRef.current.focus();
  }, []);

  useEffect(() => {
    const selectedItem = miDivRef.current.children[selectedIndex];
    if (selectedItem !== undefined) {
      const scrollRight = selectedItem.getBoundingClientRect().right;
      const scrollLeft = selectedItem.getBoundingClientRect().left;
      const divRight = miDivRef.current.getBoundingClientRect().right;
      const divLeft = miDivRef.current.getBoundingClientRect().left;

      if (scrollRight > divRight) {
        selectedItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      } else if (scrollLeft < divLeft) {
        selectedItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  }, [selectedIndex]);

  const handleKeyDown = (e) => {
    const LEFT_ARROW = 37;
    const UP_ARROW = 38;
    const RIGHT_ARROW = 39;
    const DOWN_ARROW = 40;

    if (e.keyCode === LEFT_ARROW) {
      e.preventDefault();
      const index = selectedIndex > 0 ? selectedIndex - 1 : 0;
      setSelectedIndex(index);
      miDivRef.current.children[index].focus();
    } else if (e.keyCode === RIGHT_ARROW) {
      e.preventDefault();
      const index =
        selectedIndex < miDivRef.current.children.length - 1
          ? selectedIndex + 1
          : miDivRef.current.children.length - 1;
      setSelectedIndex(index);
      miDivRef.current.children[index].focus();
    }
  };

  return (
    <div className="grid_con">
      <h1 style={{ color: "white" }}>Home</h1>
      <div className="grid">
        <div className="grid_1">
          <div
            className="grid_content_1"
            ref={miDivRef}
            onKeyDown={handleKeyDown}
            tabIndex="0"
          >
          { JSONN && JSONN.map(e => <Tarjeta
          nombre={e.name}
          
          ></Tarjeta>)}
            <Tarjeta
              nombre="Javascript nivel 3"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
            <Tarjeta
              nombre="Javascript nivel 4"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
            <Tarjeta
              nombre="Javascript nivel 5"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
            <Tarjeta
              nombre="Javascript nivel 6"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
            <Tarjeta
              nombre="Javascript nivel 7"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
            <Tarjeta
              nombre="Javascript nivel 1"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
            <Tarjeta
              nombre=".map()"
              descripcion="metodo para filtrar"
            ></Tarjeta>
            <Tarjeta
              nombre="Javascript nivel 5"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
            <Tarjeta
              nombre="Javascript nivel 4"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
            <Tarjeta
              nombre="Javascript nivel 5"
              descripcion="nuevo curso de javascript"
            ></Tarjeta>
          </div>
        </div>

        <div className="grid_3">
          <p className="grid_title">TECNOLOGIAS</p>
          <div className="grid_content_3">
            <TarjetaTech
              imagen={
                "https://camo.githubusercontent.com/58e35d08b53ec029f0e3e587a28a6f65777d352f797add843d153a0db60b9d7d/68747470733a2f2f692e696d6775722e636f6d2f79764559686e5a2e706e67"
              }
            ></TarjetaTech>
            <TarjetaTech
              imagen={
                "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
              }
            ></TarjetaTech>
            <TarjetaTech
              imagen={
                "https://blog.codefactory.ai/static/274d90c09ce8519e383c5d7ffede4734/14b42/thumb.jpg"
              }
            ></TarjetaTech>
          </div>
        </div>
      </div>
    </div>
  );
};
