import React from 'react';
import ImageInfoStyles from './styles/modalWindow';

const ModalWindow = ({activeIndex, goBack, goToNext, goToPrev, firstName,lastName,userName,unsplashProfile,altImage, srcImage, locationName, locationPosition}) => {
  const showLocation = locationName ? 'active' : '';
  const showPrevButton = activeIndex === 0 ? 'hidden' : '';
  const showNextButton = activeIndex === 9 ? 'hidden' : '';

  return (
    <ImageInfoStyles onClick={(e)=> e.stopPropagation()}>
      <div className="authorInfo--container">
        <a href={unsplashProfile}>{`${firstName} ${lastName?lastName:''}`}</a>
        <a href={unsplashProfile}>{`@${userName}`}</a>
      </div>
      <div className="picture--container">
        <img alt={altImage} src={srcImage} />
      </div>
      <div className={`placeInfo--container ${showLocation}`}>
        <p>{locationName}</p>
        <a href={`https://www.google.com/maps/search/?api=1&query=${locationPosition.latitude},${locationPosition.longitude}`}>Google Maps</a>
      </div>
      <div className="buttons--container">
        <div className={`${showPrevButton}`}>
          <button onClick={goToPrev}>Go to prev</button>
        </div>
        <div>
          <button onClick={goBack}>Go back</button>
        </div>
        <div className={`${showNextButton}`}>
          <button onClick={goToNext}>Go to next</button>
        </div>
      </div>
    </ImageInfoStyles>
  );
};

export default ModalWindow;