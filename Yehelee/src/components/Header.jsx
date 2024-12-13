import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import { FaUserCircle, FaSearch, FaUpload } from "react-icons/fa";
import UserPopup from '../components/UserPopup';

function Header() {
  const [openUserPopup, setOpenUserPopup] = useState(false);

  useEffect(() => {
    if (openUserPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openUserPopup]);

  return (
    <header data-aos='zoom' className="w-full bg-zinc-900 shadow-md py-4 sticky top-0 z-20">
      <nav className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo */}
        <div className="w-28 h-auto">
          <a href="/">
            <img src={logo} alt="Salon Logo" className="w-full h-auto object-contain" />
          </a>
        </div>
        
        {/* Search Bar in the Middle */}
        <div className="flex-grow mx-4">
          <div className="relative max-w-lg mx-auto">
            <input 
              type="text" 
              placeholder="Search XFlix" 
              className="w-full p-3 pl-10 rounded-full text-sm font-semibold bg-zinc-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <FaSearch className="absolute top-3 left-3 text-white" />
          </div>
        </div>
        
        {/* Icons: Upload Video and User */}
        <div className="flex items-center space-x-4 text-white">
          {/* Upload Video Icon */}
          <button 
            className="text-2xl p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300"
            title="Upload Video"
          >
            <FaUpload />
          </button>
          
          {/* User Icon */}
          <button 
            className="text-4xl p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 right-10"
            onClick={() => setOpenUserPopup(!openUserPopup)}
            title="User Profile"
          >
            <FaUserCircle />
          </button>

          {openUserPopup && <UserPopup onClose={() => setOpenUserPopup(false)} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
