import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categorie1 from "./pages/Categorie1"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
		  <Route path="/categorie1" element={< Categorie1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

