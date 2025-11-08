import React from "react";
import CategoryCard from "./CategoryCard";

const Portfolio = async () => {
  const result = await fetch(
    `${process.env.BASE_URL || "http://localhost:3000"}/portfolio.json`,
    { cache: "no-cache" }
  );
  const data = await result.json();
  return (
    <section
      data-theme="light"
      className="bg-base-100 py-12 md:py-20 lg:py-32"
      id="portfolio"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold text-base-content">Portfolio</h2>
          <p className="pt-2 text-base-content-secondary max-w-lg">
            Here are some of the projects I have worked on. I am always looking
            for new challenges and opportunities to learn.
          </p>
        </div>
        <div>
          <CategoryCard data={data} />
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
