import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import Sidebar from './Sidebar';

const Hero = () => {
	const [show, setShow] = useState(false);

	const toggle = () => {
		setShow(!show);
	};

	return (
		<div className="container">
			<Navbar toggle={toggle}></Navbar>
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead">¡Hola comunidad Cetaviana!</h1>
					<p>
						Suscribite a nuestro newsletter para recibir nuevas ofertas laborales en tu correo.
					</p>
					<div className="btn">Suscribirse</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
