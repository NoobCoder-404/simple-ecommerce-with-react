import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/Logo.svg';
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className="header navbar">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>

        <div className="flex-none gap-2">
          <div className="text-white text-lg nav-item hidden lg:block">
            <a href="./order">Order</a>
            <a href="./order_review">Order Review</a>
            <a href="./manage_inventory">Manage Inventory</a>
            <a href="./login">Login</a>
          </div>
          <div className="dropdown dropdown-end lg:md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className=" text-white ">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">Order</a>
              </li>
              <li>
                <a>Order Review</a>
              </li>
              <li>
                <a>Manage Inventory</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
