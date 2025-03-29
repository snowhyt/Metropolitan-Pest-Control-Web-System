import React from "react";

function navbar() {
  return (
    <div>
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Hindi ko mainsert logo</a>
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
                    <a>Our company</a>
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
                    <a>Request booking</a>
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
    </div>
  );
}

export default navbar;
