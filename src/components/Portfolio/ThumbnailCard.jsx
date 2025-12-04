"use client";

import VideoModal from "./VideoModal";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ThumbnailCard = ({ title, videoUrl }) => {
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal(() => true);
    document.getElementById(`video_modal_${title}`).showModal();
  };
  return (
    <div
      className="relative cursor-pointer group transition-all duration-300 delay-150 hover:scale-[1.03] hover:shadow-lg hover:-rotate-1"
      onClick={modalHandler}
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
      <div className="absolute bg-black/40 hover:bg-black/60  right-0 left-0 top-0 bottom-0 rounded-xl transition-all delay-200"></div>
      <div className="opacity-70 bg-base-100 w-10 h-10 flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all delay-200 group-hover:scale-[1.2] group-hover:opacity-100">
        <Play className="w-4 h-4 stroke-[1.6px] stroke-primary fill-primary group-hover:stroke-primary transition-all delay-200 group-hover:scale-[1] group-hover:fill-primary" />
      </div>
      <VideoModal
        videoUrl={videoUrl}
        title={title}
        showModal={showModal}
        idx={title}
      />
    </div>
  );
};

export default ThumbnailCard;
