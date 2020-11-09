import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeCurrentPictureData } from '../actions'
import ModalWindow from './ModalWindow';

const ModalStyles = styled.div`
  padding: 0;
  margin: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #dee2e680;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
`

const ModalWrapper = ({imageData, closeModal, removeCurrentPictureData}) => {
  const onClick = () => {
    closeModal();
    removeCurrentPictureData();
  }

  const renderImageInfo = (imageData) => {
    if (Object.keys(imageData).length !== 0) {
      return (
        <ModalWindow
          firstName={imageData.user.first_name}
          lastName={imageData.user.last_name}
          userName={imageData.user.username}
          unsplashProfile={imageData.user.links.html}

          srcImage={imageData.urls.regular}
          altImage={imageData.alt_description}

          locationName={imageData.location.name}
          locationPosition={imageData.location.position}
        />
      )
    } else return (
      <div>Loading...</div>
    )
  }

    return ReactDOM.createPortal(
      <ModalStyles onClick={onClick}>
        {renderImageInfo(imageData)}
      </ModalStyles>,
      document.querySelector('#modal')
    )
}

const mapStateToProps = (state) => {
  return {
      imageData: state.currentPicture
  }
}

export default connect (mapStateToProps, { removeCurrentPictureData })(ModalWrapper);