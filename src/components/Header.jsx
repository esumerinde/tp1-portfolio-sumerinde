import React from "react";
import "./Header.css";

const Header = () => {
  const alumno = "Emiliano Sumerinde";

  return (
    <div className="header">
      <h1>Soy {alumno} y este es mi Portfolio</h1>
      <hr />
    </div>
  );
};

export default Header;
