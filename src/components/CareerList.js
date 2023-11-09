import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CareerList.css'; // Asegúrate de colocar el nombre correcto de tu archivo CSS

// Constantes
const TOKEN = 'pathn9EfRYop5nDpn.4e62f8bfbfa1e06dc9f4468fc9b8e4b008fc295e6866a13e0998157a6a2638a5'; //schema.bases:read scope required
const BASE_ID = 'app0G6FFCpSd3wQ4s';
const API_URL = `https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`;

// Componente
function CareerList() {
  // Estado
  const [Careers, setCareers] = useState([]);

  // Función para obtener datos
  const getData = () => {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    })
    
      .then((response) => response.json())
      .then((myJson) => myJson.tables)
      .then((myTables) => myTables.filter((table) => table.name === 'company'))
      .then((selectedTables) => selectedTables.map((table) => table.fields).flat())
      .then((fields) => fields.filter((field) => field.name === 'career'))
      .then((myField) => setCareers(myField.map((field) => field.options.choices).flat()));
  };

  // Efecto secundario para cargar datos
  useEffect(() => {
    getData();
  }, []);

  // Renderizado
  return (
    <div className="categoriesContainer">
      <h1 className="categoriesHeading">Test Table</h1>
      <div className="categoriesWrapper">
        {Careers.map((career, index) => (
          <CareerOption key={index} career={career} />
        ))}
      </div>
    </div>
  );
}

// Componente para mostrar opciones de carrera con enlace
function CareerOption({ career }) {
  return (
    <Link to={`/career/${career.name}`} style={{ textDecoration: 'none' }}>
      <div className="categoriesCard">
        <img src={career.image} alt={career.name} className="categoriesImg" />
        <div className="categoriesInfo">
          <h2 className="protTitle">{career.name}</h2>
          <p>{career.description}</p>
          <button className="categoriesBtn">Ver más</button>
        </div>
      </div>
    </Link>
  );
}

export default CareerList;
