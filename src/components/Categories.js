import React from 'react';
import './Categories.css';
import { Categories } from '../data/menu';
import Slide from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';

const categories = ({ id }) => {
	return (
		<div className="categoriesContainer" id={id}>
			<h1 className="categoriesHeading">Categorías</h1>
			<div className="categoriesWrapper">
				{Categories.map((Categories, index) => (
					<Slide
						key={index}
						right={index >= 4 ? true : false}
						left={index < 4 ? true : false}
					>
						<div className="categoriesCard">
							<img src={Categories.img} className="categoriesImg" alt={Categories.alt} />
							<div className="categoriesInfo">
								<div className="protTitle">{Categories.title}</div>
								<div className="protDesc">{Categories.desc}</div>
								<Link to="/category1"><button className="categoriesBtn" >Ver más</button></Link>
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default categories;
