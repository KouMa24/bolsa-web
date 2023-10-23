import React from 'react';
import '../App.css';
import Title from '../components/Title';
import Favorite from '../components/Favorite';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

function App() {
	return (

		<>
		<Title></Title>
		<Categories id="menu"></Categories>
		<Favorite id="favorite"></Favorite>
		<Footer id="footer"></Footer>
		</>

	);
}

export default App;