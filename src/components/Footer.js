import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = ({ id }) => {
	return (
		<div className="footerContainer" id={id}>
			<div className="iconos">
				<a href='https://react-icons.github.io/react-icons/icons?name=bs'><FaInstagram className='icono instagram'/></a>
				<a href='https://react-icons.github.io/react-icons/icons?name=bs'><FaFacebook className='icono facebook'/></a>
				<a href='https://react-icons.github.io/react-icons/icons?name=bs'><FaLinkedin className='icono linkedin'/></a>
			</div>
			
		</div>
	);
};

export default Footer;
