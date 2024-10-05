import React from "react";
import "../styles/Spinner.css";

const Spinner = ({ animation = "border", size = "3rem", color = "primary" }) => {
  const colorClassMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    danger: "text-danger",
    warning: "text-warning",
    info: "text-info",
    light: "text-light",
    dark: "text-dark",
  };

  const colorClass = colorClassMap[color] || "";
  const inlineStyle = !colorClass ? { color } : {};

  return (
    <div
      className={`spinner-${animation} ${colorClass}`}
      style={{ width: size, height: size, ...inlineStyle }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
