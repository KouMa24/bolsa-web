import React from 'react';
import '../App.css';
import Title from '../components/Title';
import CareerList from '../components/CareerList';
import Footer from '../components/Footer';

function App() {
	return (
		<>
				<Title></Title>
				<CareerList id="menu"></CareerList>
				<Footer id="footer"></Footer>
			</>

	);
}

export default App;