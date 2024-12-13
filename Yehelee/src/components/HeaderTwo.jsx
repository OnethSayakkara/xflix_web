import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTransgender } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function HeaderTwo() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header data-aos='zoom' className="w-full bg-zinc-800 shadow-md py-4 sticky top-0">
      <nav className="flex justify-center items-center px-4">
        <button 
          onClick={toggleMenu} 
          className="text-white md:hidden focus:outline-none"
        >
          {isOpen ? <IoCloseSharp size={24} /> : <FaTransgender size={24} />}
        </button>
        <ul className={`md:flex md:space-x-14 text-white ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-zinc-800 md:bg-transparent top-11 left-0 w-full md:w-auto z-10 text-center`}>
          <li>
            <a 
              href="#home" 
              className="transition font-syne font-medium p-2 rounded-md hover:bg-yellow-300 hover:text-black"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="transition font-syne font-medium p-2 rounded-md hover:bg-yellow-300 hover:text-black"
            >
              Categories
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="transition font-syne font-medium p-2 rounded-md hover:bg-yellow-300 hover:text-black"
            >
              Pron Stars
            </a>
          </li>
          <li>
            <a 
              href="#proffesionals" 
              className="transition font-syne font-medium p-2 rounded-md hover:bg-yellow-300 hover:text-black"
            >
              Live Cams
            </a>
          </li>
          <li>
            <Link 
              to="shop" 
              className="transition font-syne font-medium p-2 rounded-md hover:bg-yellow-300 hover:text-black"
            >
              Photos & GIFs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderTwo;