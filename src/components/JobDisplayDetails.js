import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import base from "../api/base";
import { properties } from "../api/properties.js"

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
	  <div>{job.fields.career}</div>
	  <div>{job.fields.name_job}</div>
	  <div>{job.fields.name_company}</div>
	  <div>{job.fields.description}</div>
	  <div>{job.fields.requeriments}</div>
	  <div>{job.fields.salary}</div>
	  <div>{job.fields.email}</div>
	  <div>{job.fields.level}</div>
	  <div>{job.fields.date}</div>
	  <div>{job.fields.logo && <img className="card-img-left" src={job.fields.logo[0].url} />}</div>
	  <br/>
	</div>
  );
}

export default DisplayJobDetail;