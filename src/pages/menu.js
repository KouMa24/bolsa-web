import empleo1 from '../images/repretel_1.png';
import empleo2 from '../images/Repretel_11_logo.png';
import empleo3 from '../images/Repretel_4_logo.png';
import empleo4 from '../images/Teletica_Logo.png';
import empleo5 from '../images/Teletica_Logo.png';
import paidmedia from '../images/Repretel_4_logo.png';
import defaultImg from '../images/cake2.jpg';



const Categories = [
	{
		img: empleo1,
		alt: 'PostProducción',
		title: 'PostProducción Audiovisual',
		desc: 'Post producción',
		button: 'Ver más',
	},
	{
		img: empleo2,
		alt: 'Animación 3D',
		title: 'Animación 3D',
		desc: 'Aqui va la info.',
		button: 'Ver más',
	},
	{
		img: empleo3,
		alt: 'Diseño y desarrollo web',
		title: 'Diseño y desarrollo web',
		desc: 'Aquí va la info.',
		button: 'Ver más',
	},
	{
		img: empleo4,
		alt: 'Mercadeo digital',
		title: 'Mercadeo digital y Diseño',
		desc: 'Aquí va la info.',
		button: 'Ver más',
	},
	{
		img: empleo5,
		alt: 'Ciberseguridad',
		title: 'Ciberseguridad',
		desc: 'Aquí va la info.',
		button: 'Ver más',
	},
	{
		img: paidmedia,
		alt: 'Paid Media',
		title: 'Paid Media',
		desc: 'Aquí va la info.',
		button: 'Ver más',
	},
];

function getImageObjectByKey(keyValue) {
  const foundImage = Categories.find(image => image.title.toLowerCase() === keyValue.toLowerCase()); // Change 'id' to your desired key

  if (!foundImage) {
    return {
		img: defaultImg,
		alt: 'Default',
		title: 'Default',
		desc: 'Aquí va la info',
		button: 'Ver más',
	};
  }

  return foundImage;
}

export { Categories, getImageObjectByKey };