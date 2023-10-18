import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Favorite from './components/Favorite';
import Categories from './components/Categories';
import Chefs from './components/Chefs';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<Hero></Hero>
			<Categories id="menu"></Categories>
			<Favorite ></Favorite>
			<Footer></Footer>
		</Router>
	);
}

export default App;
