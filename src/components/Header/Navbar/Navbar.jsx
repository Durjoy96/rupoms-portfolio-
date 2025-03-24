import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavPage from "./NavPage";
import Button from "../../Buttons/Button";

const Navbar = () => {
  const pages = [
    { path: "/", name: "Home" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/contact", name: "Contact" },
  ];

  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <nav className="max-w-screen-xl mx-auto px-5 py-3 relative z-10">
        <div className="navbar rounded-full lg:bg-base-100/70 lg:backdrop-blur-lg lg:px-3 lg:py-3">
          <div className="navbar-start">
            <Link
              to="/"
              className="text-lg md:text-xl font-bold text-base-content lg:ml-4"
            >
              Rupom Sarker
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6">
              {pages.map((page, idx) => (
                <NavPage key={idx} page={page} />
              ))}
            </ul>
          </div>
          <div className="navbar-end gap-1">
            <a href="https://wa.link/z1tozl" target="_blank" rel="noreferrer">
              <Button text="Book a call" isPrimary={true}></Button>
            </a>
            <div className="dropdown dropdown-end">
              <div
                onClick={() => setDisplayMenu(!displayMenu)}
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 absolute right-0 top-1/2 -translate-y-1/2"
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
              {displayMenu && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-28 p-2 shadow space-y-1"
                >
                  {pages.map((page, idx) => (
                    <NavPage key={idx} page={page} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
