import { BiPlayCircle } from "react-icons/bi";
import Button from "../Buttons/Button";
import VideoModal from "./VideoModal";
import Label from "../Labels/Label";

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
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full rounded-lg"
            />
            <div className="absolute bg-black/30 hover:bg-black/50  right-0 left-0 top-0 bottom-0 rounded-lg transition-all delay-200"></div>
            <BiPlayCircle className="w-10 h-10 fill-base-100/80 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:fill-primary transition-all delay-200" />
            <VideoModal video={video} idx={video.title} />
          </div>
        ))}
      </div>
      {/*       <div className="flex justify-end mt-8">
        <Button text="View All" />
      </div> */}
    </div>
  );
};

export default CategoryCard;
