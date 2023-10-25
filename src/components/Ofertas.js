import React from 'react';
import './Ofertas.css';
import { Ofertas } from '../data/menuOfertas';
import Slide from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

const CategoriesComponent2 = ({ id }) => {
  return (
    <div className="categoriesContainer" id={id}>
      <h1 className="categoriesHeading">Ofertas</h1>
      <div className="categoriesWrapper">
        {Ofertas.map((Ofertas, index) => (
          <Slide
            key={index}
            right={index >= 4 ? true : false}
            left={index < 4 ? true : false}
          >
            <div className="categoriesCard">
              <img src={Ofertas.img} className="categoriesImg" alt={Ofertas.alt} />
              <div className="categoriesInfo">
                <div className="protTitle">{Ofertas.title}</div>
                <div className="protDesc">{Ofertas.desc}</div>
                <Link to={`/category${index + 1}`}>
                  <button className="categoriesBtn">Ver más</button>
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