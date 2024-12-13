import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNotice = () => {
  return (
    <header className="bg-zinc-700 p-4">
      <nav className="flex justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-200 hover:text-yellow-500'
              }
            >
              Privacy Notice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-200 hover:text-yellow-500'
              }
            >
              Terms of Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contentpatner"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-200 hover:text-yellow-500'
              }
            >
              Content Partner Program
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-200 hover:text-yellow-500'
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/system-guidelines"
              className={({ isActive }) =>
                isActive ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-200 hover:text-yellow-500'
              }
            >
              System Guidelines
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNotice;
