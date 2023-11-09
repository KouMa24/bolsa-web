import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin,FaVimeo } from "react-icons/fa";


const Footer = ({ id }) => {
	return (
		<div className="footer" id={id}>
			<div className='sb__footer section__padding'>
				<div className='sb__footer-links'>
				<div className='sb__footer-links-div'>
						<div className='social'>
						<ul>	
							<li><a href='https://instagram.com/cetav_pll?igshid=MzRlODBiNWFlZA==' class='instagram'><FaInstagram /></a></li>
							<li><a href='https://www.facebook.com/cetavcr?mibextid=ZbWKwL' class='facebook'><FaFacebook /></a></li>
							<li><a href='https://www.linkedin.com/in/cetav-parque-la-libertad-832002249/?originalSubdomain=cr'  class='linkedin'><FaLinkedin/></a></li>
							<li><a href='https://vimeo.com/cetav' class='vimeo'><FaVimeo/></a></li>
						</ul>
						</div>
						<div className="footerNav">
							<ul>
							<li><a href="#menu">Categorias</a></li>
							<li><a href="#favorite">Somos Cetav</a></li>
							<li><a href="#footer">Soporte al Cliente</a></li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
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
		
	);
};

export default Footer;
