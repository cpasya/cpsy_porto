// import Image from "next/image";
import { useState, useEffect } from "react";
import "./transitionImage.css";

const TransitionImage = () => {
  const [currentImage, setCurrentImage] = useState(false);

  const handleClick = () => {
    setCurrentImage(!currentImage);
  };

  return (
    <>
      <div className="image-container">
        <img
          src={`/assets/img/${
            currentImage === false ? "psy-nobg-crop.png" : "psy-senyum-nobg.png"
          }`}
          alt={`/assets/img/${
            currentImage === false ? "psy-nobg-crop.png" : "psy-senyum-nobg.png"
          }`}
          className={`img-fluid ${
            currentImage === false ? "wipe-out" : "wipe-in"
          }`}
        />
      </div>
      <button onClick={handleClick} className="hoverme">
        Click here to make me smile !!
      </button>
    </>
  );
};

export default TransitionImage;
