import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const linkStyles =  {
	margin: "1rem",
	textDecoration: "none",
	color: "white"

}

const Sidebar = ({ toggle, show }) => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		toggle();
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<div className={`sideContainer ${show ? 'show' : ''}`}>
			<div className="close" onClick={toggle}>
				Cerrar
			</div>
			<div className="sideMenu">
				<Link to="/" className="sideLink" onClick={() => scrollTo('menu')}>
					Categorías
				</Link>
				<Link to="/" className="sideLink" onClick={() => scrollTo('footer')}>
					Contacto
				</Link>

				<div className="btnWrap">
					<div className='btnWrap1'>
						<Link to="https://airtable.com/appWTWqC62qUVcz9w/shrip8uhxuMrJLWXh" style={linkStyles}>Boletín</Link>
					</div>
				
				</div>
			</div>
		</div>
	);
};

export default Sidebar;