import React from "react";
import "../Projects/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import useThemeStore from "../../themeStore";
import Header from "../Header";
import Footer from "../Footer";

const Projects = () => {
  const data = {
    nombre: "Emiliano",
    apellido: "Sumerinde",
    image: "https://i.imgur.com/FC1Ew37.png",
    githubLink: "https://github.com/esumerinde",
    linkedinLink: "https://www.linkedin.com/in/emiliano-sumerinde-47a17b238/",
    lenguajes: ["JavaScript", "React", "C#", "Python"],
    portfolioRepo: "https://github.com/esumerinde/tp1-portfolio-sumerinde",
    farmaciaRepo: "https://github.com/esumerinde/Farmacia-Grupo-4",
  };

  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <div>
      <Header />
      <div className={`projects-container ${isDarkMode ? "dark-mode" : ""}`}>
        <div className="projects-card">
          <img src={data.image} alt="Profile" className="projects-card-image" />
          <div className="projects-card-text">
            <h3>Proyectos Destacados y Habilidades</h3>
            <p>
              ¡Bienvenido al espacio de mis proyectos! Aca podes encontrar una
              muestra de mi trabajo en {data.lenguajes.join(", ")}. Si ademas de
              combatir el crimen te apasiona el desarrollo web y queres conocer
              más sobre mis habilidades y experiencia, te invito a explorar mi{" "}
              <a
                href={data.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>{" "}
              y a seguirme en{" "}
              <a
                href={data.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
        <div className={`my-projects-card ${isDarkMode ? "dark-mode" : ""}`}>
          <h2 className="my-projects-title">Mis Proyectos</h2>
          <div className="projects-grid">
            <div className="project-item">
              <a
                href={data.farmaciaRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.imgur.com/TWXNnU2.png"
                  alt="Farmacia Calcagni"
                />
                <div className="project-title">Farmacia Calcagni</div>
              </a>
            </div>
            <div className="project-item">
              <a
                href={data.portfolioRepo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.imgur.com/29Bsdc9.png"
                  alt="Portfolio de Emiliano"
                />
                <div className="project-title">Portfolio de Emiliano</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
