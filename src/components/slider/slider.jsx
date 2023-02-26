import { useState } from "react";


export const Slider = ({ images}) => {
    console.log(images)

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slider__image-container">
        {images.map((image, index) => (
            <>
            <div  className={`slider__element ${
              index === currentImageIndex ? "slider__element--active" : ""
            }`}>
            <img
            className="slider__img"       
            key={index}
            src={image.img}
            alt={`Slide ${index}`}
                    />
                        <p className={`slider__title ${
              index === currentImageIndex ? "slider__title--active": ""
            }`}>{image.title}</p>
            </div>
            </>
        ))}
      </div>
      <button className="slider__button slider__button--prev" onClick={goToPrevImage}>
        {"<"}
      </button>
      <button className="slider__button slider__button--next" onClick={goToNextImage}>
        {">"}
      </button>
    </div>
  );
};