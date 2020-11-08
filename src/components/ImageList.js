import React from 'react';
import styled from 'styled-components';
import history from  '../history';

const ImageListStyles = styled.div`

  width: 100%;
  display: grid;
  justify-items: center;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  .picture--container{
    max-width: 35vw;
  }
  .picture--container img {
    width: 100%;
    height: auto;
  }
`

const ImageList = ({imageData}) => {
  const onClick= (id) => {
    history.push(`/pictures/show/${id}`);
  }

  if (imageData) {
    return (
      <ImageListStyles>
        {Object.keys(imageData).map((key, i) => {
          return (
            <div className="picture--container" key={i}>
              <img
              onClick={() => onClick(imageData[key].id)}
              alt={imageData[key].alt_description}
              src={imageData[key].urls.regular}
              />
            </div>
          )
        })}
      </ImageListStyles>
    );
  } else {
    return (
      <div>Any results...</div>
    )
  }
};

export default ImageList;