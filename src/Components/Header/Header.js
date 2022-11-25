import React from 'react';
import { FaMapMarker, FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            href="/"
            className="btn btn-ghost normal-case text-sm bg-orange-400"
          >
            <FaMapMarker></FaMapMarker>Dhaka, 1212
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <button type="submit">
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
    );
};

export default Header;