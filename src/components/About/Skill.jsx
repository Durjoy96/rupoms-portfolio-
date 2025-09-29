import Image from "next/image";
import React from "react";

const Skill = ({ skill }) => {
  const { software, icon } = skill;
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-8 h-8 md:w-10 md:h-10">
        <Image className="w-full h-full object-contain" src={icon} alt="" />
      </div>
      <h4 className="text-base font-bold text-base-content group-hover:text-primary md:text-lg">
        {software}
      </h4>
    </div>
  );
};

export default Skill;
