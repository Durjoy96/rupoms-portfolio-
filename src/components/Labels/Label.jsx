import { ArrowRight } from "lucide-react";
import React from "react";

const Label = ({ text }) => {
  return (
    <>
      <span className="inline-flex items-center gap-1 px-5 py-2 rounded-full bg-primary/10 text-sm text-primary/90 font-medium cursor-default">
        <ArrowRight className="w-5 h-5" /> {text}
      </span>
    </>
  );
};

export default Label;
