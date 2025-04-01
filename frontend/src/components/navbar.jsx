import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About Us</a>
              <ul className="p-2">
                <li>
                  <a>Our Company</a>
                </li>
                <li>
                  <a>Vision & Mission</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
              </ul>
              <a>Services</a>
              <ul className="p-2">
                <li>
                  <a>Our Services</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
              </ul>
              <a>Contact Us</a>
              <ul className="p-2">
                <li>
                  <a>Service Area Locator</a>
                </li>
                <li>
                  <a>Request Booking</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
              <a>Login</a>
              <ul className="p-2">
                <li>
                  <a>Login</a>
                </li>
                <li>
                  <a>Client Login</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>About Us</summary>
              <ul className="p-2">
                <li>
                  <a>Our Company</a>
                </li>
                <li>
                  <a>Vision & Mission</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <a>Our Services</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Contact Us</summary>
              <ul className="p-2">
                <li>
                  <a>Service Area Locator</a>
                </li>
                <li>
                  <a>Request Booking</a>
                </li>
                <li>
                  <a>Contact Us</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Client Login</summary>
              <ul className="p-2">
                <li>
                  <a>Client Portal</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}

export default Navbar;
