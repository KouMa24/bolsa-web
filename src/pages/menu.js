import empleo1 from '../images/POST.png';
import empleo2 from '../images/3D.png';
import empleo3 from '../images/Web.png';
import empleo4 from '../images/MDD.png';
import empleo5 from '../images/CYBER.png';
import paidmedia from '../images/PaidMedia.png';
import MothionGaphics from '../images/Mothion Graphics.png';
import AVDATA from '../images/AVDATA.png';
import defaultImg from '../images/3D.png';

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
	{
		img: MothionGaphics,
		alt: 'Motion Graphics',
		title: 'Motion Graphics',
		desc: 'Aquí va la info.',
		button: 'Ver más',
	},
	{
		img: AVDATA,
		alt: 'Análisis y Visualización de Datos',
		title: 'Análisis y Visualización de Datos',
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