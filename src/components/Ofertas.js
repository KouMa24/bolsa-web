import React from 'react';
import './Ofertas.css';
import { Ofertas } from '../data/menuOfertas';
import Slide from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

const CategoriesComponent2 = ({ id }) => {
  return (
    <div className="ofertasContainer" id={id}>
      <h1 className="ofertasHeading">Ofertas</h1>
      <div className="ofertasWrapper">
        {Ofertas.map((Ofertas, index) => (
          <Slide
            key={index}
            left={index >= 6 ? true : false}
            right={index < 6 ? true : false}
          >
            <div className="ofertasCard">
              <img src={Ofertas.img} className="ofertasImg" alt={Ofertas.alt} />
              <div className="ofertasInfo">
                <div className="ofertasTitle">{Ofertas.title}</div>
                <div className="ofertasDesc">{Ofertas.desc}</div>
                <Link to={`/ofertas${index + 1}`}>
                  <button className="ofertasBtn">Ver más</button>
                </Link>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComponent2;