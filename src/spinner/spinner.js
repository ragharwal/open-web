import React from "react";
import spinner_cutest from "./spinner_cutest.gif";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "15%",

        justifyContent: "center",
      }}
    >
      <img src={spinner_cutest} alt="Loading" />
    </div>
  );
};

export default Spinner;
