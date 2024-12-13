import React, { useState, useEffect, useRef } from 'react';
import { IoMdEye } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";

function RecommendedVideoCard({ video, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSegment, setCurrentSegment] = useState(0);
  const [videoDuration, setVideoDuration] = useState(null);
  const videoRef = useRef(null);
  const segments = [0, 5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 100];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isHovered) {
        videoElement.play();
        videoElement.currentTime = segments[currentSegment];
      } else {
        videoElement.pause();
      }
    }
  }, [isHovered, currentSegment]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isHovered) {
        setCurrentSegment((prevSegment) => (prevSegment + 1) % segments.length);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMetadataLoaded = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      const minutes = Math.floor(duration / 60);
      const seconds = Math.floor(duration % 60);
      setVideoDuration(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
      onClick={() => onClick(video)}  // Trigger the onClick to open the video player
    >
      <div className="relative">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className={`w-[230px] h-[150px] object-contain cursor-pointer ${isHovered ? 'block' : 'hidden'}`}
          muted
          onLoadedMetadata={handleMetadataLoaded}
        />
        <img
          src={video.imgUrl}
          alt="Video Thumbnail"
          className={`w-[230px] h-[150px] object-cover cursor-pointer ${isHovered ? 'hidden' : 'block'}`}
        />
        <div className="absolute bottom-2 right-9 bg-black bg-opacity-70 text-white text-sm pl-2 pr-2 rounded-sm mr-16">
          {videoDuration || "Loading..."}
        </div>
      </div>

      <div className="p-2 w-[230px]">
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <p className="truncate text-slate-300 hover:text-white hover:underline cursor-pointer">
            {video.userId?.name || 'Unknown User'}
          </p>
          <div className="flex items-center space-x-3" style={{ width: '5rem', justifyContent: 'flex-end' }}>
            <div className="flex items-center space-x-1">
              <IoMdEye className="text-lg" />
              <p>{video.views}</p>
            </div>
            <div className="flex items-center space-x-1">
              <AiFillLike className="text-lg" />
              <p>{((video.likes.length / (video.likes.length + video.dislikes.length)) * 100).toFixed(2) || 0}%</p>
            </div>
          </div>
        </div>
        <h3 className="text-white text-sm font-semibold truncate mt-1 cursor-pointer">{video.title}</h3>
      </div>
    </div>
  );
}

export default RecommendedVideoCard;
