import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import useThemeStore from "../../themeStore";

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "emilianosumerinde";
    const templateId = "template_dt5ijva";
    const publicKey = "bR01Kt5OJC_gYfcPG";

    const templateParams = {
      nombre: nombre,
      email: email,
      mensaje: mensaje,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email mandado bien", response);
        setNombre("");
        setEmail("");
        setMensaje("");
        setEmailSent(true);
      })
      .catch((error) => {
        console.error("Error mandando el mail", error);
        alert(
          "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
        );
      });
  };

  return (
    <div>
      <Header />
      <div className={`contact-container ${isDarkMode ? "dark-mode" : ""}`}>
        <h1>
          {emailSent
            ? "Mensaje Recibido!"
            : "Contactate con un gato inservible"}
        </h1>
        {emailSent ? (
          <p className="success-message">
            Te comunicaste con los gatos inservibles con éxito!
            <br />
            Pronto estaremos en contacto contigo
            <br />
            ¡Gracias por tu mensaje!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
