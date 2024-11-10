import React from "react";
import Label from "../Labels/Label";
import Skill from "./Skill";

const About = () => {
  const skills = [
    { software: "Premiere Pro", icon: "src/assets/icons/premiere-pro.png" },
    { software: "CapCut", icon: "src/assets/icons/capcut.png" },
    {
      software: "Davinci Resolve",
      icon: "src/assets/icons/davinci-resolve.png",
    },
    { software: "Final Cut Pro", icon: "src/assets/icons/final-cut-pro.png" },
  ];

  return (
    <div className="mt-40 bg-base-200 py-12 z-10 relative">
      <div className="max-w-screen-xl mx-auto px-5 pt-12 bg-base-200">
        <div className="mb-12">
          <Label text="About me"></Label>
        </div>
        <div>
          <img
            className="rounded-xl float-left mr-12"
            src="https://placehold.co/200x200"
            alt=""
          />
          <h4 className="font-semibold text-xl text-base-content">
            Hey, it's Rupom 👋
          </h4>
          <p className="text-base font-normal text-base-content-secondary mt-4 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            aliquam quam maxime unde sapiente placeat tempora consequuntur in
            nisi aliquid atque sequi voluptatum ut, facere iste est provident
            voluptas repellendus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea quasi sunt incidunt, eum labore nemo
            reprehenderit commodi asperiores nesciunt doloribus!
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-base-content">My Skills</h3>
          <div className="flex gap-6 mt-8">
            {skills.map((item, idx) => (
              <Skill key={idx} skill={item}></Skill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
