"use client";

import VideoModal from "./VideoModal";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

const ThumbnailCard = ({ title, videoUrl }) => {
  return (
    <div
      className="relative cursor-pointer group transition-all duration-300 delay-150 hover:scale-[1.03] hover:shadow-lg hover:-rotate-1"
      onClick={() =>
        document.getElementById(`video_modal_${title}`).showModal()
      }
    >
      <Image
        src={`https://img.youtube.com/vi/${
          videoUrl.split("/")[4]
        }/maxresdefault.jpg`}
        alt={title}
        width={200}
        height={100}
        className="w-full rounded-lg"
        loading="lazy"
      />
      <div className="absolute bg-black/40 hover:bg-black/60  right-0 left-0 top-0 bottom-0 rounded-lg transition-all delay-200"></div>
      <PlayCircle className="w-10 h-10 stroke-[1.6px] stroke-base-100/80 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:stroke-primary transition-all delay-200" />
      <VideoModal videoUrl={videoUrl} title={title} idx={title} />
    </div>
  );
};

export default ThumbnailCard;
