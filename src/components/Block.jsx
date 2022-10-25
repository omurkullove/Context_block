import React, { useContext, useState } from "react";
import { paramsContext } from "../paramsContext";

const Block = () => {
  const { params } = useContext(paramsContext);

  return (
    <>
      {params.map(item => (
        <div
          style={{
            width: `${item.width}`,
            height: `${item.height}`,
            backgroundColor: `${item.color}`,
          }}
          key={item.id}>
          block
        </div>
      ))}
    </>
  );
};

export default Block;
