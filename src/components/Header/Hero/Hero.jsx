import React from "react";
import Button from "../../Buttons/Button";
import BannerImg from "../../../assets/images/banner.png";

const Hero = () => {
  return (
    <>
      <div className="relative max-w-screen-xl mx-auto px-5 mt-10 lg:mt-20">
        <div className="flex flex-col items-center justify-between gap-10 lg:gap-8 lg:flex-row">
          <div>
            <h1 className="text-4xl tracking-tight text-base-content font-bold max-w-xl md:text-5xl lg:text-6xl">
              Just Record, and{" "}
              <span className="underline decoration-dashed underline-offset-4 decoration-primary">
                Leave the Rest to Me
              </span>
            </h1>
            <p className="max-w-xl text-base font-normal text-base-content-secondary mt-4">
              Transform your raw footage into stunning, polished videos with my
              professional video editing services. I specialize in YouTube,
              vlogging, and social media content, delivering cinematic visuals
              that captivate and inspire. Let’s bring your vision to life!
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a href="https://wa.link/z1tozl" target="_blank" rel="noreferrer">
                <Button text="Book a call" isPrimary={true}></Button>
              </a>
              <Button text="Download CV" isPrimary={false}></Button>
            </div>
          </div>
          <div className="w-[600px]">
            <img className="w-full" src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
