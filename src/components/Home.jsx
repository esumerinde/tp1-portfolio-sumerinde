// filepath: c:\Facultad\Programacion 3\TP1 - Portfolio\portfolio-sumerinde\src\components\Home.jsx
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  const data = {
    nombre: "Emiliano",
    apellido: "Sumerinde",
    lenguajes: ["JavaScript", "React", "C#", "Python"],
    image: "https://i.imgur.com/FC1Ew37.png",
  };

  return (
    <div className="home-container">
      <div className="header-wrapper">
        <Header />
      </div>
      <Main data={data} />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
