import React, { useEffect, useState } from "react";
const TOKEN = 'pathn9EfRYop5nDpn.4e62f8bfbfa1e06dc9f4468fc9b8e4b008fc295e6866a13e0998157a6a2638a5'; //schema.bases:read scope required

const BASE_ID = 'app0G6FFCpSd3wQ4s';
const API_URL = 'https://api.airtable.com/v0/meta/bases/app0G6FFCpSd3wQ4s/tables';

function CareerList() {
	const [Careers, setCareers] = useState([]);
	const getData = () => {fetch(API_URL, {
					  method: 'GET',
					  headers: {
						'Content-type': 'application/json',
						Authorization: 'Bearer pathn9EfRYop5nDpn.4e62f8bfbfa1e06dc9f4468fc9b8e4b008fc295e6866a13e0998157a6a2638a5',
				  },
				}).then(function(response){
					console.log(response)
					return response.json();
				}).then (
					function(myJson) {
					console.log(myJson);
					return myJson.tables;
				  }).then(
					 function(myTables) {
						console.log(myTables)
						return myTables.filter((table) => table.name === 'company');
					 }
				  ).then(
					function(selectedTables) {
						console.log(selectedTables);
						return selectedTables.map((table) => table.fields).flat();
					}
				  ).then(
					function(fields) {
						console.log(fields);
						return fields.filter((field) => field.name === 'career');
						//setCareers(fields)
					}
				  ).then(
					function(myField) {
						console.log(myField);
						setCareers(myField.map((field)=>field.options.choices).flat())
					}
				  );
	}
	useEffect(()=>{
		getData()
	},[])
  return (
    <div>
      <h1>Test Table</h1>
	  {Careers.map((career, index) => (<div>{career.name}</div>))}
    </div>
  );
}

export default CareerList;