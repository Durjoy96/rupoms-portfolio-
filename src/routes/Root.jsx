import React from "react";
import Navbar from "../components/Header/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="z-50 lg:sticky lg:top-0">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Root;
