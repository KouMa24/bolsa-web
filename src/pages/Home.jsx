import React from 'react';
import '../App.css';
import Title from '../components/Title';
import Favorite from '../components/Favorite';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function App() {
	return (
		<><div>
			{/* Botón para redirigir a /category1 */}
			<Link to="/category1">
				<button>Ir a Category 1</button>
			</Link>
		</div><>
				<Title></Title>
				<Categories id="menu"></Categories>
				<Favorite id="favorite"></Favorite>
				<Footer id="footer"></Footer>
			</></>

	);
}

export default App;