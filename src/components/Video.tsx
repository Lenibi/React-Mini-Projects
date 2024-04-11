"use client";
import React, { useState } from "react";

interface VideoUrls {
  [key: string]: string;
}

const videos: VideoUrls = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};
const Video = () => {
  const [videoName, setVideoName] = useState(videos.deer);
  const videoNames = Object.keys(videos);
  console.log(videoNames);
  const onSelectVideo = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const selectedVideo = (event.target as HTMLInputElement).id;
    if (selectedVideo && selectedVideo in videos) {
      setVideoName(videos[selectedVideo]);
    }
  };
  return (
    <>
      <form action="">
        <div className="radioContainer">
          {videoNames.map((name, index) => (
            <div key={index}>
              <input
                onClick={onSelectVideo}
                type="radio"
                id={name}
                name="videos"
              />
              <label htmlFor={name}>{name}</label>
            </div>
          ))}
          </div>
        </form>
      <video
        width="30%"
        loop
        controls
        autoPlay
        muted
        src={videoName}
      ></video>
    </>
  );
};

export default Video;
