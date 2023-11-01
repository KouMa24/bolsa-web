import React from 'react';
import Navbar22 from "../components/Navbar22";
import JobList from "../components/JobList";  // Cambio de "Ofertas" a "JobList"

const Category1 = () => {
  return (
    <>
      <Navbar22></Navbar22>
      <JobList></JobList>  {/* Cambio de "Ofertas" a "JobList" */}
    </>
  );
}

export default Category1;
