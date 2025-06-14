import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "../Home/Home.css";
import useThemeStore from "../../themeStore";

const Home = () => {
  const data = {
    nombre: "Emiliano",
    apellido: "Sumerinde",
    lenguajes: ["JavaScript", "React", "C#", "Python"],
    image: "https://i.imgur.com/FC1Ew37.png",
  };

  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div className={`home-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Header />
      <Main data={data} />
      <Footer />
    </div>
  );
};

export default Home;
