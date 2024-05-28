import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, AlignJustify } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="container pb-12">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink to="/">
            <div className="btn btn-ghost btn-circle">
              <Home />
            </div>
          </NavLink>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-left">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <AlignJustify />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Todos</NavLink>
              </li>
              <li>
                <NavLink to="/loginpage">Login</NavLink>
              </li>
              <li>
                <NavLink to="/registerpage">Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
