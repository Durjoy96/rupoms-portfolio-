import React from "react";
import Button from "../../Buttons/Button";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              voluptatum quisquam itaque vero repellendus minima iusto nulla
              quod accusamus illum?
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Button text="Book a call" isPrimary={true}></Button>
              <Button text="Download CV" isPrimary={false}></Button>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <iframe
              className="mx-auto rounded-xl skeleton h-[200px] w-full shadow-lg md:h-[350px] md:w-[550px] lg:mx-0"
              src="https://www.youtube.com/embed/ijw_1AuCTes?si=4IeHBeMgyecHbDBc?rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
