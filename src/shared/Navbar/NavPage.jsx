"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavPage = ({ page }) => {
  const { path, name } = page;
  const pathName = usePathname();
  const isActive = pathName === "/";
  return (
    <div>
      {name === "Home" ? (
        <Link
          href={path}
          className={`text-base font-medium ${
            isActive
              ? "text-primary font-semibold"
              : "text-base-content-secondary hover:text-base-content"
          }`}
        >
          {name}
        </Link>
      ) : (
        <Link
          href={path}
          className="text-base font-medium text-base-content-secondary hover:text-base-content"
        >
          {name}
        </Link>
      )}
    </div>
  );
};

export default NavPage;
