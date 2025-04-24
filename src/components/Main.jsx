import React, { useState } from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import InvencibleFeelIt from "../assets/InvencibleFeelIt.mp3";

const Main = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const playAudio = () => {
    if (!isPlaying) {
      const newAudio = new Audio(InvencibleFeelIt);
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="main-card">
      <div className="card">
        <img src={data.image} alt="Foto de perfil" className="profile-image" />
        <FontAwesomeIcon
          icon={faMusic}
          className="audio-icon"
          onClick={playAudio}
        />
        <div className="description-box">
          <p>
            Hola, mi nombre es{" "}
            <strong>
              {data.nombre} {data.apellido}
            </strong>
            , soy un estudiante de Programacion que cursa en la UTN FRT, pero
            tambien soy un gato inservible.
          </p>
          <p>
            Me las arreglo con lenguajes como {data.lenguajes.join(", ")} y me
            gusta combatir el crimen en mi tiempo libre.
          </p>
          <p>Saludos al profe Politi y al grupo Pepsi y Puchito.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
