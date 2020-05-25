import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, width }) => {
  return (
    <button
      className="button"
      style={{
        width,
      }}
      onClick={(e) => onClick(e) }
    >
      {text}
    </button>
  );
};

export default Button;
