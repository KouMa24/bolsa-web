import React from "react";

function CompanyTable({company}) {
  return (
    <div className="col-md-3">
      <div>{company.fields.date}</div>
      <div>{company.fields.name_company}</div>
      <div>{company.fields.description}</div>
	    <div>{company.fields.career}</div>
      <div>{company.fields.logo && <img className="card-img-left" src={company.fields.logo[0].url} />}</div>
      <br/>
    </div>
   );
}

export default CompanyTable;