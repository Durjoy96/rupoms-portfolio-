import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Label = ({ text }) => {
  return (
    <>
      <span className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-primary/10 text-sm text-primary/90 font-medium cursor-default">
        <FaArrowRightLong /> {text}
      </span>
    </>
  );
};

export default Label;
