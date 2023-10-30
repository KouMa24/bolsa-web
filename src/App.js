import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category1 from "./pages/Category1"
import Category4 from "./pages/Category4";
import Category5 from "./pages/Category5";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
		      <Route path="/category1" element={< Category1 />} />
          <Route path="/category4" element={< Category4 />} />
          <Route path="/category5" element={< Category5 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;