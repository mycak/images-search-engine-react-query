import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchCurrentPicture } from '../actions'

const ModalStyles = styled.div`
  border: solid red;
  background-color: transparent;
`

const ImageSite = ({id, imageData, fetchCurrentPicture}) => {

  return ReactDOM.createPortal(
    <ModalStyles>
      Mycha
    </ModalStyles>,
    document.querySelector('#modal')
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
      imageData: state.currentPicture,
      id: ownProps.match.params.query
  }
}

export default connect (mapStateToProps, { fetchCurrentPicture })(ImageSite);