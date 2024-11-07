import React from "react";
import { NavLink } from "react-router-dom";

const NavPage = ({ page }) => {
  const { path, name } = page;
  return (
    <>
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
    </>
  );
};

export default NavPage;
