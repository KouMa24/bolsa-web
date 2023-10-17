import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footerColumn">
				<h4>Redes Sociales</h4>
				<div>Facebook</div>
				<div>Instagram</div>
				<div>LinkedIn</div>
			</div>
			<div className="footerColumn">
				<h4>Sobre nosotros</h4>
				<div>Contacto</div>
				<div>Categorías</div>
			</div>
			<div className="footerColumn">
				<h4>Ubicacíon</h4>
				<div>Desamparados</div>
				<div>Parque La Libertad</div>
			</div>
		</div>
	);
};

export default Footer;
