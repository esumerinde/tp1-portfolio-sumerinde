import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../styles/Home.css";

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
