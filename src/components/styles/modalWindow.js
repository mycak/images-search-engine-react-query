import styled from 'styled-components';

const ImageInfoStyles = styled.div`
  max-width: 70%;
  max-height: 90vh;
  background-color: #fff;
  overflow-y: auto;
  .authorInfo--container {
    max-width: 50%;
    a {
    margin: 2px;
    font-size: clamp(12px, 2vw, 20px);
    color: #495057;
    display: block;
    text-decoration: none;
    }
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
    font-size: clamp(12px, 2vw, 20px);
    p {
      margin: 2px;
    }
    &.active {
      visibility: visible;
    }
  }
  .buttons--container {
    display: flex;
    flex-direction: row;
    font-size: clamp(12px, 2vw, 20px);
    margin: 20px;
    justify-content: space-between;
    .hidden {
      visibility: hidden;
    }
  }
  
`

export default ImageInfoStyles;