import styled from 'styled-components';

export const ImageListStyles = styled.div`
  width: 99.5%;
  margin: 0.5em auto 1em auto;
  text-align: center;
  .picture--container img {
    cursor: pointer;
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
  .my-masonry-grid_column > div {
    margin-bottom: -2px;
  }
`;
export const AddMoreButton = styled.button`
  background-color: transparent;
  visibility: ${({ isMore }) => (isMore ? 'visible' : 'hidden')};
  cursor: pointer;
  border: none;
  width: 2em;
  &:active {
    background-color: transparent;
  }
`;
export const ModalIcon = styled.img`
  width: 100%;
  height: auto;
`;
