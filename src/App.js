import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category1 from "./pages/Category1"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
		      <Route path="/category1" element={< Category1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

