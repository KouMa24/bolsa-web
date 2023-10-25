import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = ({ id }) => {
	return (
		<div className="footer" id={id}>
			<div className='sb__footer section__padding'>
				<div className='sb__footer-links'>
				<div className='sb__footer-links-div'>
						<h4>Redes Sociales</h4>
						<div className='social'>
							<a href='https://instagram.com/parque_lalibertad?igshid=MzRlODBiNWFlZA=='><FaInstagram className='iconee instagram'/></a>
							<a href='https://www.facebook.com/cetavcr?mibextid=ZbWKwL'><FaFacebook className='iconee facebook'/></a>
							<a href='https://www.linkedin.com/in/cetav-parque-la-libertad-832002249/?originalSubdomain=cr'><FaLinkedin className='iconee linkedin'/></a>
						</div>
					</div>
					<div className='sb__footer-links-div'>
						<h4 className='secciones'>Secciones</h4>
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
						
					</div>
				</div> 
			</div>
		</div>
	);
};

export default Footer;
