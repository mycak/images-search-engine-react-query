import React from 'react';
import ImageInfoStyles from './styles/modalWindow'

const ModalWindow = ({goBack, firstName,lastName,userName,unsplashProfile,altImage, srcImage, locationName, locationPosition}) => {
  const showLocation = locationName ? 'active' : '';

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
      <div className="button--back">
        <button onClick={goBack}>Go back</button>
      </div>
    </ImageInfoStyles>
  );
};

export default ModalWindow;