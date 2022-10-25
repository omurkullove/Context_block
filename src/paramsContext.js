import React, { useState } from "react";
export const paramsContext = React.createContext();
const ParamsContextProvider = ({ children }) => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [color, setColor] = useState("");
  const [params, setParams] = useState([]);

  function createParams() {
    const divparams = {
      width,
      height,
      color,
      id: Date.now(),
    };
    params.push(divparams);
    setParams(params);
    setWidth("");
    setHeight("");
    setColor("");
  }

  function reset() {
    window.location.reload();
  }

  return (
    <paramsContext.Provider
      value={{
        setWidth,
        setHeight,
        setColor,
        params: params,
        color: color,
        height: height,
        width: width,

        createParams,
        reset,
      }}>
      {children}
    </paramsContext.Provider>
  );
};

export default ParamsContextProvider;
