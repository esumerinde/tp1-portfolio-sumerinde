import React, { useEffect, useState } from "react";
import "./About.css";
import Header from "../Header";
import Footer from "../Footer";
import datosAbout from "./datosAbout.json";
import useThemeStore from "../../themeStore";

const About = () => {
  const [datos, setDatos] = useState(null);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    setDatos(datosAbout[0]);
  }, []);

  if (!datos) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Header />
      <div className={`about-container ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="about-card">
          <img
            src={datos.imagen}
            alt={`${datos.nombre} ${datos.apellido}`}
            className="about-image"
          />
          <h2>
            {datos.nombre} {datos.apellido}
          </h2>
          <p className="about-description">{datos.descripcionPersonal}</p>
          <h3>Hobbies:</h3>
          <ul>
            {datos.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
          <h3>Contacto:</h3>
          <p>Teléfono: {datos.contacto.telefonoPersonal}</p>
          <p>Correo: {datos.contacto.correo}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
