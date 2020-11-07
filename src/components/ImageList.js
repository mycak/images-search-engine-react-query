import React from 'react';
import styled from 'styled-components';

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

  if (imageData) {
    return (
      <ImageListStyles>
        {Object.keys(imageData).map((key, i) => {
          return (
            <div className="picture--container" key={i}>
              <img
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
      <div>Loading...</div>
    )
  }
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//       query: ownProps.match.params.id,
//       pictures: state.pictures
//   }
// }

export default ImageList;