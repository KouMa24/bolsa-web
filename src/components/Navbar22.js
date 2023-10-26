import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar22.css';
import logo from '../images/logonero.png';

const Navbar = ({ toggle }) => {
  const [move, setMove] = useState(false);

  const moveNavbar = () => {
    setMove(window.scrollY > 210); // Se mueve después de desplazarse 100 píxeles hacia abajo
  };

  useEffect(() => {
    window.addEventListener('scroll', moveNavbar);

    return () => {
      window.removeEventListener('scroll', moveNavbar);
    };
  }, []);

  return (
    <nav className={`navbar ${move ? 'move' : ''}`}>
      <Link className="navlink" to="/">
        <div className="desktop">
          <img src={logo} alt='logo' className='img1' />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;