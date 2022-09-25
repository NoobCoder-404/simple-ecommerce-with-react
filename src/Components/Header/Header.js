/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none gap-2 ">
          <div className="lg:block hidden">
            <div className="text-xl font-bold ">
              <a className="link-item" href="">
                Order
              </a>
              <a className="link-item" href="">
                Order Review
              </a>
              <a className="link-item" href="">
                Manage Inventory
              </a>
              <a className="link-item" href="">
                Login
              </a>
            </div>
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <span className="text-white">
                <i className="fa-solid fa-bars"></i>
              </span>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content  rounded-box w-52">
              <li>
                <a className="justify-between">
                  Order
                  <span className="badge">New</span>
                </a>
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
    </header>
  );
};

export default Header;
