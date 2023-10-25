import React from 'react';
import './Categories.css';
import { Categories } from '../data/menu';
import Slide from 'react-reveal/Reveal';

const categories = ({ id }) => {
	return (
		<div className="categoriesContainer" id={id}>
			<h1 className="categoriesHeading">Categorías</h1>
			<div className="categoriesWrapper">
				{Categories.map((Categories, index) => (
					<Slide
						key={index}
						left={index >= 5 ? true : false}
						right={index <5 ? true : false}
					>
						<div className="categoriesCard">
							<img src={Categories.img} className="categoriesImg" alt={Categories.alt} />
							<div className="categoriesInfo">
								<div className="protTitle">{Categories.title}</div>
								<div className="protDesc">{Categories.desc}</div>
								<button className="categoriesBtn">Ver más</button>
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default categories;
