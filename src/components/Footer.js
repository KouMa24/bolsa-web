import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = ({ id }) => {
	return (
		<div className="footer" id={id}>
			<div className='sb__footer section__padding'>
				<div className='sb__footer-links'>
					<div className='sb__footer-links-div'>
						<h4>Secciones</h4>
						<a href='/'>
							<p>Employer</p>
						</a>
						<a href='/'>
							<p>Employer</p>
						</a>
						<a href='/'>
							<p>Employer</p>
						</a>
					</div>
					<div className='sb__footer-links-div'>
						<h4>Contacto</h4>
						<a href='#'>
							<p>Employer</p>
						</a>
						<a href='/'>
							<p>Employer</p>
						</a>
						<a href='/'>
							<p>Employer</p>
						</a>
					</div>
					<div className='sb__footer-links-div'>
						<h4>Soporte</h4>
						<a href='#'>
							<p>Employer</p>
						</a>
						<a href='/'>
							<p>Employer</p>
						</a>
						<a href='/'>
							<p>Employer</p>
						</a>
					</div>
					<div className='sb__footer-links-div'>
						<h4>Redes Sociales</h4>
						<div className='social'>
							<a href='https://www.w3schools.com/'><FaInstagram className='iconee instagram'/></a>
							<a href='https://www.w3schools.com/'><FaFacebook className='iconee facebook'/></a>
							<a href='https://www.w3schools.com/'><FaLinkedin className='iconee linkedin'/></a>
						</div>
					</div>
				</div>
				<hr></hr>
				<div className='sb__footer-below'>
					<div className='sb__footer-copyright'>
						<p>
							@{new Date().getFullYear()} La Libertad. Todos los derechos reservados.
						</p>
					</div>
					<div className='sb__footer-below-links'>
						<a href='/'><div><p>Términos y Condiciones</p></div></a>
						<a href='/'><div><p>Términos y Condiciones</p></div></a>
						<a href='/'><div><p>Términos y Condiciones</p></div></a>
						<a href='/'><div><p>Términos y Condiciones</p></div></a>
					</div>
				</div>

			</div>
			
		</div>
	);
};

export default Footer;
