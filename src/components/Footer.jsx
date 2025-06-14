import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Me podes encontrar en:
        <a
          href="https://github.com/esumerinde"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/emiliano-sumerinde-47a17b238/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>{" "}
        |{" "}
        <a
          href="https://www.instagram.com/esum.26/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>{" "}
        |{" "}
        <a
          href="https://wa.me/5493813643969"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </p>
      <p>
        © 2025 Sumerinde Emiliano y Gatos Inservibles. Todos los derechos
        reservados.
      </p>
    </div>
  );
};

export default Footer;
