import React from "react";
import { NavLink } from "react-router-dom";

const NavPage = ({ page }) => {
  const { path, name } = page;
  return (
    <>
      {name === "Home" ? (
        <NavLink
          to={path}
          className={({ isActive }) =>
            `text-base font-medium ${
              isActive
                ? "text-primary font-semibold"
                : "text-base-content-secondary hover:text-base-content"
            }`
          }
        >
          {name}
        </NavLink>
      ) : (
        <a
          href={path}
          className="text-base font-medium text-base-content-secondary hover:text-base-content"
        >
          {name}
        </a>
      )}
    </>
  );
};

export default NavPage;
