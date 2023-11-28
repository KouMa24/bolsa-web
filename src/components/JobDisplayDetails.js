import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import base from "../api/base";
import { properties } from "../api/properties.js"
import './Details.css';

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
    <div className="job-card">
        <div className="oferta">
            {job.fields.logo && <img className="card-img-left" src={job.fields.logo[0].url} />}
        </div>
        <div className="info">
            <div className="job">{job.fields.name_job}</div>
            <div className="carrera">{job.fields.career}</div>
			      <div className="company">{job.fields.name_company}</div>
            <div className="description"><h2>Descripcion: </h2>{job.fields.description}</div>
            <div className="requerimientos">{job.fields.requeriments}</div>
            <ul className="specs">
              <li><a> <div className="salario"><h2>Salario: </h2>{job.fields.salary}</div></a></li>
              <li><a><div className="email"><h2>Email: </h2>{job.fields.email}</div></a></li>
              <li><a><div className="nivel"><h2>Nivel: </h2>{job.fields.level}</div></a></li>
              <li><a><div className="date"> <h2>Fecha: </h2>{job.fields.date}</div></a></li>
            </ul>
        </div>
    </div>
    
</div>

  );
}

export default DisplayJobDetail;