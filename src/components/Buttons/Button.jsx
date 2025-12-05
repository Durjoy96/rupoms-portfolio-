import React from "react";

const Button = ({ text, isPrimary }) => {
  return (
    <>
      <button
        className={`btn btn-lg py-1 px-4 text-sm md:px-8 md:text-base rounded-full hover:opacity-70 ${
          isPrimary
            ? "bg-gradient-to-r text-primary-content from-primary to-blue-500/50 hover:bg-primary hover:border-primary"
            : "bg-base-100 text-primary border border-primary hover:bg-base-100 hover:border-primary"
        }`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
