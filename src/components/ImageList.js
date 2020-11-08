import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchCurrentPicture } from '../actions';

const ImageListStyles = styled.div`
  margin: auto;
  width: 95%;
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 2rem;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  .picture--container{
    max-width: 35vw;
  }
  .picture--container img {
    width: 100%;
    height: auto;
  }
`

const ImageList = ({imageData, fetchCurrentPicture}) => {

  const onClick= (e) => {
    e.preventDefault();
    fetchCurrentPicture(e.target.dataset.id)
  }

  if (Object.keys(imageData).length !== 0) {
    return (
      <ImageListStyles>
        {Object.keys(imageData).map((key, i) => {
          return (
            <div className="picture--container" key={i}>
              <img
              onClick={onClick}
              alt={imageData[key].alt_description}
              src={imageData[key].urls.regular}
              data-id={imageData[key].id}
              />
            </div>
          )
        })}
      </ImageListStyles>
    );
  } else {
    return (
      <div style={{textAlign: 'center'}}>Any results...</div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      pictures: state.pictures,
  }
}

export default connect(mapStateToProps, { fetchCurrentPicture })(ImageList);