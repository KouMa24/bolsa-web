import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import base from "../api/base.js";
import DisplayCompany from "./DisplayCompany.js";
import { properties } from "../api/properties.js"
import './StyleRecords.css';
import { Link} from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function CompanyList() {
  let {careerToFind} = useParams();
  const [Companies, setCompanies] = useState([]);
  useEffect(() => {
    base(properties.tableName)
      .select({ view: 'Grid view',
				filterByFormula: 'FIND("'+careerToFind+`", ${properties.fieldName}) > 0`})
      .eachPage((records, fetchNextPage) => {
        setCompanies(records);
        fetchNextPage();
      });
  });
  return (
    <div>
      <div className="fondo">
      <div className="btnBack1">
        <Link to="/" onClick={() => window.history.back()} className="btnBack2" >
          <FaArrowAltCircleLeft/>
        </Link>
      </div>
      <div className="titulo">
      <h1>{careerToFind}</h1>
      </div>
      </div>
      {Companies.map((t) => (
		<DisplayCompany key={t.id} company={t}/>
      ))}
    </div>
  );
}
export default CompanyList;