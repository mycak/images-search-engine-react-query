import React from 'react';
import styled from 'styled-components';

const ImageInfoStyles = styled.div`
  max-width: 70%;
  max-height: 90vh;
  background-color: #fff;
  overflow-y: auto;
  .authorInfo--container {
    max-width:50%;
  }
  .authorInfo--container a{
    margin: 2px;
    font-size: clamp(10px, 1.5vw, 20px);
    color: #495057;
    display: block;
    text-decoration: none;
  }
  .picture--container {
    padding: 5px;
    width: 60%;
    margin: auto;
    img {
      height: auto;
      width: 100%;
    }
  }
  .placeInfo--container {
    visibility: hidden;
    margin: 2px;
    font-size: clamp(10px, 1.5vw, 20px);
    p {
      margin: 2px;
    }
  }
  .placeInfo--container.active {
      visibility: visible;
    }
`
const ImageInfo = ({firstName,lastName,userName,unsplashProfile,altImage, srcImage, locationName, locationPosition}) => {
  console.log(locationName)
  const showLocation = locationName ? 'active' : '';

  return (
    <ImageInfoStyles onClick={(e)=> e.stopPropagation()}>
      <div className="authorInfo--container">
        <a href={unsplashProfile}>{`${firstName} ${lastName}`}</a>
        <a href={unsplashProfile}>{`@${userName}`}</a>
      </div>
      <div className="picture--container">
        <img alt={altImage} src={srcImage} />
      </div>
      <div className={`placeInfo--container ${showLocation}`}>
        <p>{locationName}</p>
        <a href={`https://www.google.com/maps/search/?api=1&query=${locationPosition.latitude},${locationPosition.longitude}`}>Google Maps</a>
      </div>
    </ImageInfoStyles>
  );
};

export default ImageInfo;