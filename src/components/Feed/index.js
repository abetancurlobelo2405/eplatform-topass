import React from "react";
import styles from "./styles.module.css";
import Visualizer from "../Visualizer";
import Link from "next/link";

const VIDEOS = [
  {
    id: 1,
    src: "video1.mp4",
  },
  {
    id: 2,
    src: "video2.mp4",
  },
  {
    id: 3,
    src: "video3.mp4",
  },
  {
    id: 4,
    src: "video4.mp4",
  },
];

const Feed = () => {
  return (
    <>
      <div className={styles.wrapper}>
        {VIDEOS.map((video) => (
          <div key={video.id} className={styles.section}>
            <Visualizer className={styles.item} src={video.src} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Feed;
