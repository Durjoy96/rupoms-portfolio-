"use client";

import React, { useRef } from "react";

const VideoModal = ({ video, idx }) => {
  const iframeRef = useRef(null);

  const handleClose = () => {
    // Pause YouTube video by posting message
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  };

  // Modify YouTube URL to enable the JavaScript API
  const getVideoUrl = () => {
    if (video.url.includes("youtube.com")) {
      // Add enablejsapi=1 to the URL
      const separator = video.url.includes("?") ? "&" : "?";
      return `${video.url}${separator}enablejsapi=1`;
    }
    return video.url;
  };

  return (
    <>
      <dialog id={`video_modal_${idx}`} className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={handleClose}
            >
              ✕
            </button>
          </form>
          <iframe
            ref={iframeRef}
            src={getVideoUrl()}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg w-full h-[192px] md:h-[477px] max-h-[477px] mt-4 z-10"
          ></iframe>
          <h3 className="font-bold text-lg text-base-content mt-2">
            {video.title}
          </h3>
        </div>
      </dialog>
    </>
  );
};

export default VideoModal;
