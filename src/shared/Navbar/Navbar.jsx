"use client";

import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import Link from "next/link";
import useScrollDirection from "@/utils/hooks/useScrollDirection";
import Ping from "@/components/ping";

const Navbar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <nav
        data-theme="light"
        className={`max-w-screen-xl mx-auto pl-4 pr-0 py-1 mt-2 relative z-50 rounded-full shadow${
          scrollDirection === "down" &&
          "transition-all duration-1000 ease-in-out translate-y-[-100%]"
        } ${
          scrollDirection === "up" &&
          "transition-all duration-1000 ease-in-out translate-y-0"
        }`}
      >
        <div className="navbar rounded-full bg-base-100 shadow-sm lg:px-3 lg:py-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a>Hire Me</a>
                  <ul className="p-2">
                    <li>
                      <a
                        href="https://www.fiverr.com/mdrupomsarkerr"
                        className="flex justify-between"
                        target="_blank"
                      >
                        <span>
                          <svg
                            width="75"
                            height="15"
                            viewBox="0 0 150 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#404145">
                              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                            </g>
                            <g fill="#1dbf73">
                              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                            </g>
                          </svg>
                        </span>
                        <span className="text-xs text-base-content-secondary/80">
                          recommended
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.upwork.com/freelancers/~014217012d66298673?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~014217012d66298673%2Fprofile"
                        target="_blank"
                      >
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIgMjgiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJpbWciPjxwYXRoIGQ9Ik0yOC4xOCAxOS4wNkE2LjU0IDYuNTQgMCAwMTIzIDE2Yy42Ny01LjM0IDIuNjItNyA1LjItN3M0LjU0IDIgNC41NCA1LTIgNS00LjU0IDVtMC0xMy4zNGE3Ljc3IDcuNzcgMCAwMC03LjkgNi4wOCAyNiAyNiAwIDAxLTEuOTMtNS42MkgxMnY3LjljMCAyLjg3LTEuMyA1LTMuODUgNXMtNC0yLjEyLTQtNXYtNy45SC40OXY3LjlBOC42MSA4LjYxIDAgMDAyLjYgMjBhNy4yNyA3LjI3IDAgMDA1LjU0IDIuMzVjNC40MSAwIDcuNS0zLjM5IDcuNS04LjI0VjguNzdhMjUuODcgMjUuODcgMCAwMDMuNjYgOC4wNUwxNy4zNCAyOGgzLjcybDEuMjktNy45MmExMSAxMSAwIDAwMS4zNiAxIDguMzIgOC4zMiAwIDAwNC4xNCAxLjI4aC4zNEE4LjEgOC4xIDAgMDAzNi4zNyAxNGE4LjEyIDguMTIgMCAwMC04LjE5LTguMzFNODAuOCA3Ljg2VjYuMThoLTMuNnYxNS42M2gzLjY1di02LjEyYzAtMy43Ny4zNC02LjQ4IDUuNC02LjEzVjZjLTIuMzYtLjE4LTQuMi4zMS01LjQ1IDEuODciIGZpbGw9InZhcigtLWNvbG9yLWxvZ28sIGJsYWNrKSIvPjxwb2x5Z29uIHBvaW50cz0iNTUuNTEgNi4xNyA1Mi44NyAxNy4xMSA1MC4wNSA2LjE3IDQ1LjQxIDYuMTcgNDIuNTkgMTcuMTEgMzkuOTUgNi4xNyAzNi4yNiA2LjE3IDQwLjMxIDIxLjgyIDQ0LjY5IDIxLjgyIDQ3LjczIDEwLjcxIDUwLjc0IDIxLjgyIDU1LjEyIDIxLjgyIDU5LjQgNi4xNyA1NS41MSA2LjE3IiBmaWxsPSJ2YXIoLS1jb2xvci1sb2dvLCBibGFjaykiLz48cGF0aCBkPSJNNjcuNDIgMTkuMDdjLTIuNTkgMC00LjUzLTIuMDUtNC41My01czItNSA0LjUzLTVTNzIgMTEgNzIgMTRzLTIgNS00LjU0IDVtMC0xMy4zNUE4LjEgOC4xIDAgMDA1OS4yNSAxNGE4LjE4IDguMTggMCAxMDE2LjM1IDAgOC4xMSA4LjExIDAgMDAtOC4xOC04LjMxbTI0LjA1IDguNDRoLjg0bDUuMDkgNy42OWg0LjExbC01Ljg1LTguNTNhNy42NiA3LjY2IDAgMDA0Ljc0LTcuMTFoLTMuNjNjMCAzLjM3LTIuNjYgNC42NS01LjMgNC42NVYwaC0zLjY1djIxLjgyaDMuNjR6IiBmaWxsPSJ2YXIoLS1jb2xvci1sb2dvLCBibGFjaykiLz48L3N2Zz4="
                          alt="Upwork logo"
                          width="56"
                          height="15"
                        />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link
              href="/"
              className="text-lg md:text-xl font-bold text-base-content lg:ml-4"
            >
              Rupom Sarker
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex lg:gap-8">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <details>
                  <summary className="relative">
                    {" "}
                    Hire Me{" "}
                    <span className="absolute left-0.5">
                      <Ping />
                    </span>
                  </summary>
                  <ul className="p-2 bg-base-100 w-52 z-1">
                    <li>
                      <a
                        href="https://www.fiverr.com/mdrupomsarkerr"
                        className="flex justify-between"
                        target="_blank"
                      >
                        <span>
                          <svg
                            width="75"
                            height="15"
                            viewBox="0 0 150 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#404145">
                              <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                            </g>
                            <g fill="#1dbf73">
                              <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                            </g>
                          </svg>
                        </span>
                        <span className="text-xs text-base-content-secondary/80">
                          recommended
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.upwork.com/freelancers/~014217012d66298673?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~014217012d66298673%2Fprofile"
                        target="_blank"
                      >
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIgMjgiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJpbWciPjxwYXRoIGQ9Ik0yOC4xOCAxOS4wNkE2LjU0IDYuNTQgMCAwMTIzIDE2Yy42Ny01LjM0IDIuNjItNyA1LjItN3M0LjU0IDIgNC41NCA1LTIgNS00LjU0IDVtMC0xMy4zNGE3Ljc3IDcuNzcgMCAwMC03LjkgNi4wOCAyNiAyNiAwIDAxLTEuOTMtNS42MkgxMnY3LjljMCAyLjg3LTEuMyA1LTMuODUgNXMtNC0yLjEyLTQtNXYtNy45SC40OXY3LjlBOC42MSA4LjYxIDAgMDAyLjYgMjBhNy4yNyA3LjI3IDAgMDA1LjU0IDIuMzVjNC40MSAwIDcuNS0zLjM5IDcuNS04LjI0VjguNzdhMjUuODcgMjUuODcgMCAwMDMuNjYgOC4wNUwxNy4zNCAyOGgzLjcybDEuMjktNy45MmExMSAxMSAwIDAwMS4zNiAxIDguMzIgOC4zMiAwIDAwNC4xNCAxLjI4aC4zNEE4LjEgOC4xIDAgMDAzNi4zNyAxNGE4LjEyIDguMTIgMCAwMC04LjE5LTguMzFNODAuOCA3Ljg2VjYuMThoLTMuNnYxNS42M2gzLjY1di02LjEyYzAtMy43Ny4zNC02LjQ4IDUuNC02LjEzVjZjLTIuMzYtLjE4LTQuMi4zMS01LjQ1IDEuODciIGZpbGw9InZhcigtLWNvbG9yLWxvZ28sIGJsYWNrKSIvPjxwb2x5Z29uIHBvaW50cz0iNTUuNTEgNi4xNyA1Mi44NyAxNy4xMSA1MC4wNSA2LjE3IDQ1LjQxIDYuMTcgNDIuNTkgMTcuMTEgMzkuOTUgNi4xNyAzNi4yNiA2LjE3IDQwLjMxIDIxLjgyIDQ0LjY5IDIxLjgyIDQ3LjczIDEwLjcxIDUwLjc0IDIxLjgyIDU1LjEyIDIxLjgyIDU5LjQgNi4xNyA1NS41MSA2LjE3IiBmaWxsPSJ2YXIoLS1jb2xvci1sb2dvLCBibGFjaykiLz48cGF0aCBkPSJNNjcuNDIgMTkuMDdjLTIuNTkgMC00LjUzLTIuMDUtNC41My01czItNSA0LjUzLTVTNzIgMTEgNzIgMTRzLTIgNS00LjU0IDVtMC0xMy4zNUE4LjEgOC4xIDAgMDA1OS4yNSAxNGE4LjE4IDguMTggMCAxMDE2LjM1IDAgOC4xMSA4LjExIDAgMDAtOC4xOC04LjMxbTI0LjA1IDguNDRoLjg0bDUuMDkgNy42OWg0LjExbC01Ljg1LTguNTNhNy42NiA3LjY2IDAgMDA0Ljc0LTcuMTFoLTMuNjNjMCAzLjM3LTIuNjYgNC42NS01LjMgNC42NVYwaC0zLjY1djIxLjgyaDMuNjR6IiBmaWxsPSJ2YXIoLS1jb2xvci1sb2dvLCBibGFjaykiLz48L3N2Zz4="
                          alt="Upwork logo"
                          width="56"
                          height="15"
                        />
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a href="https://wa.link/z1tozl" target="_blank" rel="noreferrer">
              <Button text="Book a call" isPrimary={true}></Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
