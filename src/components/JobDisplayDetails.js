import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import base from "../api/base";
import { properties } from "../api/properties.js"
import './Details.css';
import { Link } from "react-router-dom";

const linkStyles =  {
	margin: "1rem",
	textDecoration: "none",
	color: "white"
}
function DisplayJobDetail () {
  let {id} = useParams();
  const [Jobs, setJobs] = useState([]);
  useEffect(() => {
    base(properties.tableName)
      .find(id,((err, record) => {
        setJobs([record]);
      }));
  });
  return (
    <div className="col-md-3">
	{Jobs.map((job) => (
	   <JobDisplay key={ job.id } job = { job } />
	))}
    </div>
   );
}

// Componente para mostrar el job
function JobDisplay({ job }) {
  return (
	<div className="col-md-3">
    <div className="btnBack">
    <Link to="/" onClick={() => window.history.back()} className="boton-volver" style={linkStyles}>
      Volver
    </Link>
    </div>
    <div className="job-card">
  <div className="oferta">
    {job.fields.logo && <img className="card-img-left" src={job.fields.logo[0].url} />}
    <div className="description"><h2>Descripción: </h2>{job.fields.description}</div>
  </div>
  <div className="info">
    <div className="job">{job.fields.name_job}</div>
    <div className="specs">
      <li>
        <a className="campo-info">
          <div className="campo"><h2>Email: </h2></div>
          <div className="email">{job.fields.email}</div>
        </a>
      </li>
      <li>
        <a className="campo-info">
          <div className="campo"><h2>Salario: </h2></div>
          <div className="salario">{job.fields.salary}</div>
        </a>
      </li>
      <li>
        <a className="campo-info">
          <div className="campo"><h2>Nivel: </h2></div>
          <div className="nivel">{job.fields.level}</div>
        </a>
      </li>
      <li>
        <a className="campo-info">
          <div className="campo"><h2>Fecha: </h2></div>
          <div className="date">{job.fields.date}</div>
        </a>
      </li>
      <li>
        <a className="campo-info">
          <div className="campo"><h2>Carrera: </h2></div>
          <div className="carrera">{job.fields.career}</div>
        </a>
      </li>
      <li>
        <a className="campo-info">
          <div className="campo"><h2>Compañía: </h2></div>
          <div className="company">{job.fields.company}</div>
        </a>
      </li>
      <li>
        <a className="campo-info">
          <div className="campo"><h2>Requerimientos: </h2></div>
          <div className="requerimientos">{job.fields.requeriments}</div>
        </a>
      </li>
    </div>
  </div>
</div>
    
</div>

  );
}

export default DisplayJobDetail;