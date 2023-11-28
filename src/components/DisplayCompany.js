import React from "react";
import './StyleRecords.css';
import { Link } from "react-router-dom";


function CompanyTable({company}) {
  return (
    <Link to={`/job/${company.id}`} style={{ textDecoration: 'none' }}>
    <div className="maincontainer">
      <div className="thecard">
      {/* <div className="fecha">{company.fields.date}</div> */}
      <div className="nombre">{company.fields.name_company}</div>
      {/* <div className="description">{company.fields.description}</div> */}
	    <div className="career">{company.fields.career}</div>
      <div>{company.fields.logo && <img className="card-img-left" src={company.fields.logo[0].url} />}</div>
      <button className="boton">Ver más</button>
      <br/>
      </div>
    </div>
    </Link>
   );
}

export default CompanyTable;