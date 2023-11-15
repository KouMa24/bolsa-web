import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CompanyList from "./components/CompanyList";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/career/:careerToFind" element={< CompanyList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;