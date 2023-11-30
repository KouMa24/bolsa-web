import React from "react";
import './contact.css';
import Mapa from "../images/mapacetav.png"; 

const TuTarjeta = ({ id }) => {
  return (
    <div className="card">
      <div className="contacto-container" id={id}>
        <div className="contacto-info">
          <h2 className="titulocontacto">Contacto</h2>
          <p>
            <strong>Teléfono:</strong> 2276-9400
          </p>
          <p>
            <strong>Email:</strong> cetav@lalibertadcr.org
          </p>
          <p>
            <strong>Ubicación:</strong> Fátima de Desamparados del Palí 300 metros al Este y 250 metros Norte, o bien frente a la Plaza de Deportes de Río Azul de La Unión.
          </p>
        </div>
        <div className="contacto-foto">
          <a href="https://www.google.com/maps/place/Edificio+Cetav,+Parque+La+Libertad/@9.8900157,-84.0391839,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0e35bc324a6df:0xb8c9f37035672702!8m2!3d9.8900157!4d-84.0366036!16s%2Fg%2F11ghndq091?entry=ttu">
            <img
              src={Mapa}
              alt="Foto de contacto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TuTarjeta;