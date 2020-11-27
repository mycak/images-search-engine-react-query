import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchCurrentPicture } from '../actions';
import ModalWrapper from './ModalWrapper';
import Masonry from 'react-masonry-css';

const ImageListStyles = styled.div`
  margin: auto;
  width: 99%;
  .picture--container img {
    width: 100%;
    height: auto;
  }
  .my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 2px;
    padding-right: 2px;
    background-clip: padding-box;
  }
  .my-masonry-grid_column > div{
    margin-bottom: 2px;
  }
`;

const ImageList = ({imageData, fetchCurrentPicture}) => {
  const [currentId, setCurrentId] = useState(null);
  const [isModalShown, setIsModalShown] = useState(false);
  const closeModal = useCallback(()=>{
    setIsModalShown(false);
  },[])

  const onClick= (e) => {
    const modalData = imageData[e.target.dataset.id];
    setCurrentId(e.target.dataset.id)
    fetchCurrentPicture(modalData.id)
    setIsModalShown(true)
  }
  const showModal = () => {
    if (isModalShown) {
      return (
        <ModalWrapper closeModal={closeModal} currentId={currentId}  />
      )
    }
  }

  if (Object.keys(imageData).length !== 0) {
    return (
      <ImageListStyles>
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {Object.keys(imageData).map((key, i) => {
          return (
            <div className="picture--container" key={i}>
              <img
              onClick={onClick}
              alt={imageData[key].alt_description}
              src={imageData[key].urls.regular}
              data-id={i}
              />
            </div>
          )
        })}
        </Masonry>
        {showModal() }
      </ImageListStyles>
    );
  } else {
    return (
      <div style={{textAlign: 'center', fontSize: 'clamp(12px, 2vw, 20px)'}}>Any results...</div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
      pictures: state.pictures,
  }
};

export default connect(mapStateToProps, { fetchCurrentPicture })(ImageList);