import React, { useContext } from "react";
import Block from "./Block";
import { paramsContext } from "../paramsContext";

const Inputs = () => {
  const {
    setWidth,
    setHeight,
    setColor,
    createParams,
    color,
    width,
    height,
    reset,
  } = useContext(paramsContext);
  return (
    <div>
      <input
        type="text"
        onChange={e => setWidth(e.target.value)}
        placeholder="Ширина"
        value={width}
      />
      <br />
      <input
        type="text"
        onChange={e => setHeight(e.target.value)}
        placeholder="Высота "
        value={height}
      />
      <br />
      <input
        type="text"
        onChange={e => setColor(e.target.value)}
        placeholder="Цвет"
        value={color}
      />
      <br />
      <button onClick={createParams}>Create</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Inputs;
