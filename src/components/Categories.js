import React from 'react';
import './Categories.css';
import { Categories } from '../data/menu';
import Slide from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

const CategoriesComponent = ({ id }) => {
  return (
    <div className="categoriesContainer" id={id}>
      <h1 className="categoriesHeading">Categorías</h1>
      <div className="categoriesWrapper">
        {Categories.map((category, index) => (
          <Slide
            key={index}
            right={index >= 4 ? true : false}
            left={index < 4 ? true : false}
          >
            <div className="categoriesCard">
              <img src={category.img} className="categoriesImg" alt={category.alt} />
              <div className="categoriesInfo">
                <div className="protTitle">{category.title}</div>
                <div className="protDesc">{category.desc}</div>
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

export default CategoriesComponent;

