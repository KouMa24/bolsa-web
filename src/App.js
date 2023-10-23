
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Title from './components/Title';
import Favorite from './components/Favorite';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<Title></Title>
			<Categories id="menu"></Categories>
			<Favorite ></Favorite>
			<Footer></Footer>
		</Router>
	);

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

