import React, { useState } from "react";
import "./Burger.scss";

const ToggleBurger = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? "green" : "red"}>
      <h2>Hlasdas</h2>
      <div className={isActive ? "red" : "green"}>
        <h1>Hallo</h1>
      </div>

      <div
        onClick={handleToggle}
        className={`burger-menu ${isActive ? "active" : ""}`}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </div>
  );
};
export default ToggleBurger;
