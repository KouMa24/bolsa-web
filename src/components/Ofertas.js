import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
  };

  return (
    <div style={cardStyle}>
      <h2>{job.fields.title}</h2>
      <p>{job.fields.description}</p>
      <p>Empresa: {job.fields.company}</p>
      <Link to={`/oferta/${job.id}`}>Más Información</Link>
    </div>
  );
}

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.airtable.com/v0/appWTWqC62qUVcz9w/Jobs?sort%5B0%5D%5Bfield%5D=date&sort%5B0%5D%5Bdirection%5D=desc", {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.records);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar las ofertas de empleo: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando ofertas de empleo...</p>;
  }

  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
