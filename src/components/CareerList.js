import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CareerList.css'; // Asegúrate de colocar el nombre correcto de tu archivo CSS

// Constantes
const TOKEN = 'patZTU0Nu8mvEfqQf.1b9e913c066ccfa15ea79772392da190ffba8d9ba6dfdc1d8dc1f3e2c51a9873'; //schema.bases:read scope required
const BASE_ID = 'appWTWqC62qUVcz9w';
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
      .then((myTables) => myTables.filter((table) => table.name === 'Jobs'))
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
    <div className="careerContainer">
      <h1 className="careerHeading">Categorías</h1>
      <div className="careerWrapper">
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
      <div className="careerCard">
        <img src={career.image} alt={career.name} className="careerImg" />
        <div className="careerInfo">
          <h2 className="protTitle">{career.name}</h2>
          <p>{career.description}</p>
          <button className=" careerBtn">Ver más</button>
        </div>
      </div>
    </Link>
  );
}

export default CareerList;
