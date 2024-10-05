// import Image from "next/image";
import { useState } from "react";
import "./transitionImage.css";

const TransitionImage = () => {
  let image1 = "pasya-jas-formal.png";
  let image2 = "pasya-jaket.png";
  let image3 = "pasya-jas-hijau.png";
  let image4 = "pasya-jas-merah.png";
  let image5 = "pasya-jas-putih.png";
  let image6 = "pasya-tni.png";

  const [currentImage, setCurrentImage] = useState("");
  const [clothesImage, setClothesImage] = useState(image1);

  const handleClickClothesRight = () => {
    if (clothesImage === image1) {
      setClothesImage(image2);
    } else if (clothesImage === image2) {
      setClothesImage(image3);
    } else if (clothesImage === image3) {
      setClothesImage(image4);
    } else if (clothesImage === image4) {
      setClothesImage(image5);
    } else if (clothesImage === image5) {
      setClothesImage(image6);
    } else if (clothesImage === image6) {
      setClothesImage(image1);
    }
  };

  const handleClickClothesLeft = () => {
    if (clothesImage === image1) {
      setClothesImage(image6);
    } else if (clothesImage === image2) {
      setClothesImage(image1);
    } else if (clothesImage === image3) {
      setClothesImage(image2);
    } else if (clothesImage === image4) {
      setClothesImage(image3);
    } else if (clothesImage === image5) {
      setClothesImage(image4);
    } else if (clothesImage === image6) {
      setClothesImage(image5);
    }
  };

  const handleClick = () => {
    setCurrentImage(!currentImage);
  };

  return (
    <>
      <div className="image-container">
        <div className="d-flex flex-row">
          <button className="arrow-blink" onClick={handleClickClothesLeft}>
            <i className="bi bi-arrow-left" style={{ fontSize: "40px" }}></i>
          </button>
          <div className="">
            <img
              src={`/assets/img/me/${clothesImage}`}
              className={`img-fluid`}
            />
            {/* <img
              src={`/assets/img/${
                currentImage === false
                  ? "psy-nobg-crop.png"
                  : "psy-senyum-nobg.png"
              }`}
              alt={`/assets/img/${
                currentImage === false
                  ? "psy-nobg-crop.png"
                  : "psy-senyum-nobg.png"
              }`}
              className={`img-fluid ${currentImage}`}
            /> */}
          </div>
          <button className="arrow-blink" onClick={handleClickClothesRight}>
            <i className="bi bi-arrow-right" style={{ fontSize: "40px" }}></i>
          </button>
        </div>
      </div>
      <div className="hoverme">Change my style by clicking the arrow !!</div>
    </>
  );
};

export default TransitionImage;
