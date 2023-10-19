import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Title from './components/Title';
import Favorite from './components/Favorite';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Navbar></Navbar>
			<Title></Title>
			<Categories id="menu"></Categories>
			<Favorite ></Favorite>
			<Footer></Footer>
		</Router>
	);
}

export default App;
