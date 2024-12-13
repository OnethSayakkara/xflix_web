import React from 'react';
import logos from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';



const Header = () => {



  return (
    <header className="w-full bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-36 h-auto">
          <a href="/">
            <img src={logos} alt="Salon Logo" className="w-full h-auto object-contain" />
          </a>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="#home" className="hover:text-gray-400 transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400 transition-colors duration-300">Categories</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400 transition-colors duration-300">Pron Stars</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400 transition-colors duration-300">Photos & GIFs</a>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
