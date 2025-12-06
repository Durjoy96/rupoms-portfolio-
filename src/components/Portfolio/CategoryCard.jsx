"use client";

import React, { useEffect, useRef, useState } from "react";
import ThumbnailCard from "./ThumbnailCard";
import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryCard({ data }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [projects, setProjects] = useState(null);
  const category = searchParams.get("category") || null;
  const [categoryName, setCategoryName] = useState(category || "Long Form");
  useEffect(() => {
    setProjects(() =>
      data.filter((project) => project.category === categoryName)
    );
  }, [categoryName]);

  const portfolioRef = useRef(null);

  useEffect(() => {
    if (category && portfolioRef.current)
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div ref={portfolioRef} className="flex justify-start mt-6 lg:mt-8">
        <div className="flex items-center rounded-full px-1 py-0.5 bg-base-200 w-fit border-base-300">
          {data.map((projects, idx) => (
            <button
              key={idx}
              className={`rounded-full py-2 px-3 lg:py-2 lg:px-4 text-sm lg:text-base cursor-pointer ${
                categoryName === projects.category
                  ? "bg-gradient-to-r text-primary-content from-primary to-blue-500/50 hover:bg-primary hover:border-primary shadow-primary shadow-sm"
                  : "text-gray-500 hover:text-base-content border-transparent bg-transparent"
              }`}
              onClick={() => {
                setCategoryName(() => projects.category);
                const params = new URLSearchParams(searchParams.toString());
                params.set("category", projects.category);

                router.replace(`?${params.toString()}`, {
                  scroll: false,
                });
              }}
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
