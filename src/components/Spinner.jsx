import React from "react";
import "../styles/Spinner.css";

const Spinner = ({ type = "border", size = "3rem", color = "primary" }) => {
  // Create a map of color classes to custom text color classes
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

  // Determine if the color is a custom color code or Bootstrap-like color
  const colorClass = colorClassMap[color] || "";
  const inlineStyle = !colorClass ? { color } : {};

  // Bootstrap Spinner Types
  return (
    <div
      className={`spinner-${type} ${colorClass}`}
      style={{ width: size, height: size, ...inlineStyle }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
