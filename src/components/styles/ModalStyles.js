import styled from "styled-components";

export const ImageInfoStyles = styled.div`
  max-width: 70%;
  max-height: 90vh;
  background-color: #fff;
  overflow-y: auto;
`;

export const PictureContainer = styled.div`
  img {
    height: auto;
    width: 100%;
  }
`;
export const PlaceInfoContainer = styled.div`
  visibility: ${({ location }) => (location ? "visible" : "hidden")};
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: clamp(12px, 2vw, 20px);
  justify-content: space-between;
`;
export const ButtonPrev = styled.button`
  visibility: ${({ activeIndex }) =>
    activeIndex === 0 ? "hidden" : "visible"};
`;
export const ButtonNext = styled.button`
  visibility: ${({ activeIndex }) =>
    activeIndex === 9 ? "hidden" : "visible"};
`;

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "10",
  },
};
