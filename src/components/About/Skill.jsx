import React from "react";

const Skill = ({ skill }) => {
  const { software, icon } = skill;
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <div className="w-8 h-8 md:w-10 md:h-10">
        <img
          className="w-full h-full object-contain grayscale group-hover:grayscale-0"
          src={icon}
          alt=""
        />
      </div>
      <h4 className="text-base font-bold text-base-content group-hover:text-primary md:text-lg">
        {software}
      </h4>
    </div>
  );
};

export default Skill;
