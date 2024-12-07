import React from "react";
import Label from "../Labels/Label";
import Skill from "./Skill";
import capcutPng from "../../assets/icons/capcut.png";
import PremierePng from "../../assets/icons/premiere-pro.png";
import DavinciPng from "../../assets/icons/davinci-resolve.png";
import FinalCutPng from "../../assets/icons/final-cut-pro.png";

const About = () => {
  const skills = [
    { software: "Premiere Pro", icon: PremierePng },
    { software: "CapCut", icon: capcutPng },
    {
      software: "Davinci Resolve",
      icon: DavinciPng,
    },
    { software: "Final Cut Pro", icon: FinalCutPng },
  ];

  return (
    <div className="mt-0 bg-base-200 py-32 z-10 relative lg:mt-40">
      <div className="max-w-screen-xl mx-auto px-5 pt-12 bg-base-200">
        <div className="mb-12">
          <Label text="About me"></Label>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <img
            className="rounded-xl"
            src="https://placehold.co/200x200"
            alt=""
          />
          <div>
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
        </div>
        <div className="mt-8 md:mt-12">
          <h3 className="text-xl font-bold text-base-content md:text-2xl">
            My Skills
          </h3>
          <div className="flex flex-col gap-5 mt-6 md:flex-row md:gap-6 md:mt-8">
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
