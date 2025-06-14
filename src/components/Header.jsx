import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";
import useThemeStore from "../themeStore";

const Header = () => {
  const location = useLocation();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);

  const getNavLinkStyle = (path) => {
    if (location.pathname === path) {
      return {
        color: "#fde047",
        textDecoration: "underline",
      };
    } else {
      return {};
    }
  };

  return (
    <div className="header">
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <Link to="/" style={getNavLinkStyle("/")} className="nav-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={getNavLinkStyle("/about")}
                className="nav-link"
              >
                Acerca de Mí
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                style={getNavLinkStyle("/projects")}
                className="nav-link"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={getNavLinkStyle("/contact")}
                className="nav-link"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                to="#"
                onClick={toggleDarkMode}
                className="dark-mode-link nav-link"
              >
                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                {" Modo " + (isDarkMode ? "Claro" : "Oscuro")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
