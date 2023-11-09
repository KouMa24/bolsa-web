import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category1 from "./pages/Category1";
import Category2 from "./pages/Category2";
import Category3 from "./pages/Category3";
import Category4 from "./pages/Category4";
import Category5 from "./pages/Category5";
import CompanyList from "./components/CompanyList";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
		      <Route path="/category1" element={< Category1 />} />
          <Route path="/category2" element={< Category2 />} />
          <Route path="/category3" element={< Category3 />} />
          <Route path="/category4" element={< Category4 />} />
          <Route path="/category5" element={< Category5 />} />
          <Route path="/career/:careerToFind" element={< CompanyList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;