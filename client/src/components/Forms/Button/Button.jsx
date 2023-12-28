import React from "react";
import "./button.scss";
import { Link } from "react-router-dom";

const Button = ({ type, fullWidth, to, variant = "solid", children }) => {
  const style = {
    width: fullWidth && "100%",
  };

  return (
    <>
      {to ? (
        <Link style={style} to={to} className={`btn ${variant || ""}`}>
          {children}
        </Link>
      ) : (
        <button
          style={style}
          type={type && type}
          className={`btn ${variant || ""}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
