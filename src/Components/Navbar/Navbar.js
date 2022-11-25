import React from 'react';
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href='/' className="btn btn-ghost normal-case text-xl">
            <span className="font-bold">shop</span>cart
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 flex items-center">
            <FaUser></FaUser>
            <li>
              <a href='/'>Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;