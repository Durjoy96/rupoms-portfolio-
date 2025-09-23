import React from "react";
import CategoryCard from "./CategoryCard";
import TenXFasterThumb from "../../assets/thumbnails/10x-faster.jpg";
import YouAreJustBoredThumb from "../../assets/thumbnails/you-are-just-bored.jpg";
import FFFRFrameworkThumb from "../../assets/thumbnails/FFFR-Framework.jpg";
import ConquerPlanningAnxietyThumb from "../../assets/thumbnails/Conquer-Planning-Anxiety.jpg";

const Portfolio = () => {
  const data = [
    {
      category: "Long Form",
      videos: [
        {
          url: "https://www.youtube.com/embed/nME06vckjzM",
          title: "Stop Editing Slow! Premiere Pro Shortcuts to Edit 10X Faster",
          thumbnail: TenXFasterThumb,
        },
        {
          url: "https://www.youtube.com/embed/7pyC0QfP8ds",
          title: "You're just bored",
          thumbnail: YouAreJustBoredThumb,
        },
        {
          url: "https://www.youtube.com/embed/8XUjDNZrp-I",
          title: "How I made 100k using my FFFR Framework",
          thumbnail: FFFRFrameworkThumb,
        },
        {
          url: "https://www.youtube.com/embed/ss_ycdC-cqc",
          title: "Conquer Planning Anxiety",
          thumbnail: ConquerPlanningAnxietyThumb,
        },
        {
          url: "https://www.youtube.com/embed/7ZUMlr--eZc",
          title: "Passion or Pressure? Why I Deleted My YouTube Channel",
          thumbnail:
            "https://i.ytimg.com/vi/7ZUMlr--eZc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA5bmV9bmUo3y30_b6DCKcpI_UQZA",
        },
        {
          url: "https://www.youtube.com/embed/CbUrGyvjVh0",
          title:
            "Follow These 6 Simple Steps To Start Video Editing With Confidence",
          thumbnail:
            "https://i.ytimg.com/vi/CbUrGyvjVh0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBI6XBdlBETIBHnMF5cBWnQB9e9iA",
        },
        {
          url: "https://www.youtube.com/embed/EiCH_HSIWtA",
          title: "LF_003_Fyzee",
          thumbnail: "https://i.ibb.co.com/B5XLMHwH/maxresdefault.jpg",
        },
        {
          url: "https://www.youtube.com/embed/i7p3OH6Dk4M",
          title: "LF_004_Street Cars",
          thumbnail: "https://i.ibb.co.com/LzfYM2tn/maxresdefault.jpg",
        },
      ],
    },
    {
      category: "Short Form",
      videos: [
        {
          url: "https://www.youtube.com/embed/3n9eTeXdclE",
          title:
            "I Learned Premiere Pro Easily… Except for This Skill!..#rupomsarker #videoeditor #premierpro",
          thumbnail: "https://i.ibb.co.com/v6rC97QX/maxresdefault.jpg",
        },
        {
          url: "https://www.youtube.com/embed/BiMlIsCCDG4",
          title: "SF_002_Tanjir",
          thumbnail: "https://i.ibb.co.com/jvcy1PRN/maxresdefault.jpg",
        },
        {
          url: "https://www.youtube.com/embed/no9rnH2Xztw",
          title: "SF_003_Accidental Entrepreneur",
          thumbnail: "https://i.ibb.co.com/s9yZsMWn/maxresdefault.jpg",
        },
        {
          url: "https://www.youtube.com/embed/v0ilWCGv0J4",
          title: "SF_004_Promises Are Easy",
          thumbnail: "https://i.ibb.co.com/pvq55yDP/maxresdefault.jpg",
        },
      ],
    },
    {
      category: "Cinematic",
      videos: [
        {
          url: "https://www.youtube.com/embed/sQw24qoFXAk",
          title: "CIN_001_Dropout",
          thumbnail: "https://i.ibb.co.com/JWY2MWRP/maxresdefault.jpg",
        },
      ],
    },
  ];

  return (
    <section className="bg-base-100 py-12 md:py-20 lg:py-32" id="portfolio">
      <div className="max-w-screen-xl mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold text-base-content">Portfolio</h2>
          <p className="pt-2 pb-4 text-base-content-secondary max-w-lg">
            Here are some of the projects I have worked on. I am always looking
            for new challenges and opportunities to learn.
          </p>
        </div>
        <div>
          {data.map((item, idx) => (
            <CategoryCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
