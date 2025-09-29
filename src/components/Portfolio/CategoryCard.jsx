"use client";

import VideoModal from "./VideoModal";
import Label from "../Labels/Label";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

const CategoryCard = ({ data }) => {
  return (
    <div className="mt-12">
      <Label text={data.category}></Label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data.videos.map((video, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer group"
            onClick={() =>
              document.getElementById(`video_modal_${video.title}`).showModal()
            }
          >
            <Image
              src={`https://img.youtube.com/vi/${
                video?.url.split("/")[4]
              }/maxresdefault.jpg`}
              alt={video.title}
              width={200}
              height={100}
              className="w-full rounded-lg"
              loading="lazy"
            />
            <div className="absolute bg-black/40 hover:bg-black/60  right-0 left-0 top-0 bottom-0 rounded-lg transition-all delay-200"></div>
            <PlayCircle className="w-10 h-10 stroke-[1.6px] stroke-base-100/80 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:stroke-primary transition-all delay-200" />
            <VideoModal video={video} idx={video.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
