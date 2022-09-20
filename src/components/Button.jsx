import React from "react";

const Button = ({ bgColor, color, borderRadius, size, text }) => {
  return (
    <button
      className={`p-3 text-${size} hover:drop-shadow-xl`}
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
    >
      {text}
    </button>
  );
};

export default Button;
