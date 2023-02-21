import React, { useRef, useState } from "react";
import styles from "./styles.module.css";

const Visualizer = ({ src }) => {
  const video = useRef();
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    playing ? video.current.pause() : video.current.play();

    setPlaying(!playing);
  };

  const addToCart = async () => {
    await fetch("/api/product-to-cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        ref={video}
        loop
        src={src}
      />
      <div onClick={addToCart}>Agregar al carrito</div>
      <button onClick={handlePlay} className={styles.player}>
        PLAY
      </button>
    </div>
  );
};

export default Visualizer;
