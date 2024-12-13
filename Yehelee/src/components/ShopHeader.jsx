import React from 'react'
import { FaUserAlt, FaShoppingCart} from 'react-icons/fa'
import { useState } from 'react';

function ShopHeader({ categories, onCategorySelect }) {
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4 px-8 ">
      <div className="container mx-auto flex justify-center items-center">
                    {/* Category Dropdown */}
                    <div
            className="relative font-syne"
            onMouseEnter={() => setCategoryOpen(true)}
            onMouseLeave={() => setCategoryOpen(false)}
          >
            <button className="text-gray_black hover:text-gray-300">
              CATEGORY
            </button>
            {categoryOpen && (
              <ul className="absolute bg-white text-black mt-2 p-2 shadow-lg rounded w-[150px] z-50">
                {categories.map((category) => (
                  <li
                    key={category}
                    className="p-2 hover:bg-gray cursor-pointer"
                    onClick={() => onCategorySelect(category)} // Trigger category select
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button className="text-gray_black hover:text-gray ml-5">
              BRAND
            </button>
            <button className="text-gray_black hover:text-gray ml-5">
              ACCESORIES
            </button>
            <button className="text-gray_black hover:text-gray ml-5">
              SERVICES
            </button>
      </div>
    </header>
  )
}

export default ShopHeader
