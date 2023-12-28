import React from "react";
import "./heading.scss";

const Heading = ({ type, children }) => {
  return <h1 className={`heading ${type || ""}`}>{children}</h1>;
};

export default Heading;