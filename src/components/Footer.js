import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="iconos">
				<a href='https://react-icons.github.io/react-icons/icons?name=bs'><FaInstagram className='icon instagram'/></a>
				<a href='https://react-icons.github.io/react-icons/icons?name=bs'><FaFacebook className='icon facebook'/></a>
				<a href='https://react-icons.github.io/react-icons/icons?name=bs'><FaLinkedin className='icon linkedin'/></a>
			</div>
			
		</div>
	);
};

export default Footer;
