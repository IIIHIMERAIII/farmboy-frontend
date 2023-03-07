import { useState } from "react";
import { SubTitle, Svg } from "./styled";
import sprite from '../../images/sprite.svg'

export const Slider = ({ images, subTitles}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const currentSubtitle = (index) => {
    switch(index) {
      case 0:
        return subTitles[0];
      case 1:
        return subTitles[1];
      case 2:
        return subTitles[2];
      default:
        return subTitles[0];
    }
  };

  return (
    <>
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
          <Svg>
            <use href={`${sprite}#arrow-left`}/>   
          </Svg>
      </button>
      <button className="slider__button slider__button--next" onClick={goToNextImage}>
          <Svg>
            <use href={`${sprite}#arrow-right`}/>   
          </Svg>
      </button>
      </div>
      <SubTitle>{`${currentSubtitle(currentImageIndex)}`}</SubTitle>
    </>
  );
};