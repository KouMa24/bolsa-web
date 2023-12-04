import React, { useState } from 'react';
// import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import logo from "../images/logo_la_libertad_cetav-03.png";

const Navbar = ({ toggle }) => {
	const [move, setMove] = useState(false);

	const moveNavbar = () => {
		if (window.scrollY >800) {
			setMove(true);
		} else {
			setMove(false);
		}
	};
	window.addEventListener('scroll', moveNavbar);

	return (
		<nav className={`navbar ${move ? 'move' : ''}`}>
			<Link className="navlink" to="/">
				<div className="desktop"><img src= {logo} alt='logo' className='img1'/></div>
			</Link>
			<div className="navicon" onClick={toggle}>
				<FaBars className="icon"></FaBars>
			</div>
		</nav>
	);
};

export default Navbar;
