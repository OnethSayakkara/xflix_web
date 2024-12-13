import React, { useContext } from 'react';
import { FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
// Import CartContext
import Logo from '../assets/images/white.svg';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function MenuHeader() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const nav = () => {
    navigate('/cart', { replace: true });
  };

  return (
    <header className="bg-[#A47046] py-4 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center space-x-8 font-syne">
          <img src={Logo} alt="Logo" className="w-64 h-auto -ml-12" />
        </nav>

        <div className="relative ml-56">
          <input
            type="text"
            placeholder="Search ...."
            className="bg-white text-[#A47046] placeholder-[#A47046] rounded-full pl-10 py-2 pr-4 font-syne w-[450px] shadow-md focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A47046]" />
        </div>

        <div className="relative ml-[400px]">
        <Link to ="/cart"><FaShoppingCart className="w-6 h-6 text-white cursor-pointer -mr-20" /></Link>
          
            <span className="absolute top-[-10px] right-[-10px] bg-red text-white rounded-full text-xs px-2 py-1">
            {cartItemCount}
            </span>
          
        </div>
        
        <FaUserAlt className="w-6 h-6 text-white cursor-pointer" />
      </div>
    </header>
  );
}

export default MenuHeader;
