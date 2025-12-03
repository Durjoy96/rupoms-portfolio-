import React from "react";
import Label from "../Labels/Label";
import Skill from "./Skill";
import capcutPng from "@/assets/icons/capcut.png";
import PremierePng from "@/assets/icons/premiere-pro.png";
import DavinciPng from "@/assets/icons/davinci-resolve.png";
import AdobePng from "@/assets/icons/adobe-after-effects.png";
import RupomsHeadshot from "@/assets/images/profile.png";
import Image from "next/image";

const About = () => {
  const skills = [
    { software: "Premiere Pro", icon: PremierePng },
    {
      software: "After Effects",
      icon: AdobePng,
    },
    {
      software: "Davinci Resolve",
      icon: DavinciPng,
    },
    { software: "CapCut", icon: capcutPng },
  ];

  return (
    <div
      data-theme="light"
      className="bg-base-200 z-10 relative pb-12 md:pb-20 lg:pb-32"
    >
      <div className="max-w-screen-xl mx-auto px-5 pt-12 bg-base-200">
        <div className="mb-12">
          <Label text="About me"></Label>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-52 h-52 rounded-xl p-2">
            <Image
              className="rounded-xl w-full h-full object-cover object-center"
              src={RupomsHeadshot}
              alt="Rupom Sarker"
            />
          </div>
          <div>
            <h4 className="font-semibold text-xl text-base-content">
              Hi, I'm Rupom Sarker👋
            </h4>
            <p className="text-base font-normal text-base-content-secondary mt-4 max-w-3xl">
              A passionate video editor with over{" "}
              <b className="text-base-content">4 years of experience</b>{" "}
              crafting cinematic stories and impactful visual content.
              Specializing in YouTube, vlogging, and social media editing, I
              help brands and creators elevate their content with precision and
              creativity. I aim to inspire, educate, and connect through the art
              of storytelling, blending technical expertise with artistic
              vision. Let's create something remarkable together!
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
