import React from "react";

const Skill = ({ skill }) => {
  const { software, icon } = skill;
  return (
    <div className="p-5 rounded-xl bg-base-100 border">
      <div className="w-24 h-24 mx-auto">
        <img className="w-full h-full object-contain" src={icon} alt="" />
      </div>
      <p className="text-lg font-bold text-base-content mt-3">{software}</p>
    </div>
  );
};

export default Skill;
