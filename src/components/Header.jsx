import React, { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { hexCode } from "../utils/utils.js";
import "../App.css"
export default function Header() {
  const [state, setState] = useState({
    rows: 0,
    columns: 0,
    total: 1,
  });

  const getGridSize = () => {
    let columns, rows;
    columns = Math.floor(document.documentElement.clientWidth / 25);
    rows = Math.floor(document.documentElement.clientHeight / 25);

    console.log(columns, rows);

    setState((prevState) => ({
      ...prevState,
      rows: rows,
      columns: columns,
      total: rows * columns,
    }));

    document.body.style.setProperty("--rows", state.rows);
    document.body.style.setProperty("--columns", state.columns);

    console.log(state);

    anime({
      targets: ".tile",
      duration: 0,
      easing: "linear",
    });
  };

  useEffect(() => {
    let columns, rows;
    columns = Math.floor(document.documentElement.clientWidth / 25);
    rows = Math.floor(document.documentElement.clientHeight / 25);

    setState((prevState) => ({
      ...prevState,
      rows: rows,
      columns: columns,
      total: rows * columns,
    }));

    document.body.style.setProperty("--rows", rows);
    document.body.style.setProperty("--columns", columns);
    console.log(rows, columns);
  }, []);

  window.onresize = getGridSize;

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * hexCode.length);
    const color = hexCode[randomIndex].code.hex;

    return color;
  };

  const handleStagger = (i) => {
    //Find the id of tile clicked
    const el = i.target.id;

    anime({
      targets: ".tile",
      backgroundColor: randomColor(),
      delay: anime.stagger(50, { grid: [state.columns, state.rows], from: el }),
    });
  };

  return (
    <div>
      <div id="tiles">
        {[...Array(state.total)].map((tile, i) => (
          <div
            className="tile"
            key={i}
            id={i}
            onClick={(i) => handleStagger(i)}
          />
        ))}
      </div>
    </div>
  );
}
