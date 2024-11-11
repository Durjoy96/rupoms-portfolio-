import React from "react";

const Skill = ({ skill }) => {
  const { software, icon } = skill;
  return (
    <div className="flex items-center gap-6 group cursor-default">
      <div className="w-10 h-10 border">
        <img
          className="w-full h-full object-contain grayscale group-hover:grayscale-0"
          src={icon}
          alt=""
        />
      </div>
      <h4 className="text-lg font-bold text-base-content group-hover:text-primary">
        {software}
      </h4>
    </div>
  );
};

export default Skill;
