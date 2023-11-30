import React from 'react';
import '../App.css';
import Title from '../components/Title';
import CareerList from '../components/CareerList';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

function App() {
	return (
		<>
				<Title></Title>
				<CareerList id="menu"></CareerList>
				<Contact id="contacto"></Contact>
				<Footer id="footer"></Footer>
			</>

	);
}
export default App;