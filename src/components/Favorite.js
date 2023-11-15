import React from 'react';
import { Link } from 'react-router-dom';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';
import favorite from '../images/principal-logo.png';

const Favorite = ({ id }) => {
	return (
		<div className="favContainer" id={id}>
			<h2>Somos CETAV</h2>

			<div className="favContent">
				<Slide left>
					<img src={favorite} className="favImage" alt="cake" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<p>
							Brindamos a personas jóvenes, la oportunidad de desarrollar competencias técnicas en áreas relacionadas a la tecnología y las artes visuales. En el CETAV del Parque La Libertad, proponemos un modelo de inclusión social para la innovación.
						</p>
					</div>
				</Slide>
			</div>
			<button className="favBtn">
				<Link to="https://airtable.com/appWTWqC62qUVcz9w/shrip8uhxuMrJLWXh">Boletín</Link>
				</button>
		</div>
	);
};

export default Favorite;
