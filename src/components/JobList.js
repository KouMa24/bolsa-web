import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Código para cargar datos desde la nueva URL de la API de Airtable y mostrarlos en tarjetas
function Cards() {
  // Estado para almacenar los datos de la API
  const [post, setPost] = useState([]);
  const [context, setContext] = useState("Filtrar por técnico");

  // Estado para manejar errores y mensajes de error
  const [errorHandler, setErrorHandler] = useState(false);
  const [errorMessage, setErrorMessage] = useState(" ");

  // Efecto para cargar datos desde la nueva URL de la API de Airtable
  useEffect(() => {
    // Nueva URL de la API de Airtable
    const apiUrl = "https://api.airtable.com/v0/appWTWqC62qUVcz9w/shrTqPGWgIxEia6Qg";
    const headers = {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    };

    // Realizar la solicitud a la API
    fetch(apiUrl, { headers })
      .then((response) => {
        if (!response.ok) {
          throw Error("No se pudieron cargar las ofertas, por favor inténtelo más tarde o recargue la página.");
        }
        return response.json();
      })
      .then((res) => {
        // Filtrar los datos según el contexto
        if (context === "Filtrar por técnico") {
          setPost(res.records);
        } else {
          const filteredOptions = res.records.filter((card) => {
            return card.fields.career[0].includes(context);
          });
          if (filteredOptions) {
            setPost(filteredOptions);
          }
        }
        setErrorHandler(false);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setErrorHandler(true);
      });
  }, [context]);

  // Renderizar tarjetas con los datos
  return (
    <div>
      <h2>Ofertas Laborales</h2>
      <select onChange={(e) => setContext(e.target.value)}>
        <option value="Filtrar por técnico">Filtrar por técnico</option>
        {/* Agrega opciones de filtro aquí */}
      </select>
      {errorHandler ? (
        <p>{errorMessage}</p>
      ) : (
        post.map((currElement) => (
          <Link to={`/oferta/${currElement.id}`} key={currElement.createdTime}>
            <div>
              {currElement.fields.logo ? (
                <img src={currElement.fields.logo[0].url} alt="Logo" />
              ) : (
                <img src="img/imac.svg" alt="Placeholder" />
              )}
              <h3>{currElement.fields.career.join(", ")}</h3>
              <p>{currElement.fields.name_company}</p>
              <p>{currElement.fields.name_job}</p>
              <div>
                {currElement.fields.type_job.map((currentTypeJob) => (
                  <span key={currentTypeJob}>{currentTypeJob}</span>
                ))}
                {currElement.fields.job_level.map((currentTypeJobLevel) => (
                  <span key={currentTypeJobLevel}>{currentTypeJobLevel}</span>
                ))}
              </div>
              <Link to={`/oferta/${currElement.id}`}>
                Más Información
              </Link>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Cards;
