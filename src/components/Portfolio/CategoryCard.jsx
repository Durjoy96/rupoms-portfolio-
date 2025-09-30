"use client";

import React, { useEffect, useState } from "react";
import ThumbnailCard from "./ThumbnailCard";

export default function CategoryCard({ data }) {
  const [categoryName, setCategoryName] = useState("Long Form");
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    setProjects(() =>
      data.filter((project) => project.category === categoryName)
    );
  }, [categoryName]);
  return (
    <div>
      <div className="flex justify-start mt-8">
        <div className="flex items-center rounded-full px-1 py-0.5 bg-base-200 w-fit border-base-300">
          {data.map((projects, idx) => (
            <button
              key={idx}
              className={`rounded-full py-2 px-4 cursor-pointer ${
                categoryName === projects.category
                  ? "bg-gradient-to-r text-primary-content from-primary to-blue-500/50 hover:bg-primary hover:border-primary shadow-primary shadow-sm"
                  : "text-gray-500 hover:text-base-content border-transparent bg-transparent"
              }`}
              onClick={() => setCategoryName(() => projects.category)}
            >
              {projects.category}
            </button>
          ))}
        </div>
      </div>
      {projects && (
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {projects[0].videos.map((project, idx) => (
              <ThumbnailCard
                key={idx}
                videoUrl={project.url}
                title={project.title}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
