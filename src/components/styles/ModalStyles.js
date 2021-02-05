import styled from "styled-components";

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "85%",
    height: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "0",
    overflow: "visible",
  },
};

export const ImageInfoStyles = styled.div`
  background-color: #fff;
  overflow-y: auto;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    font-size: 10px;
  }
`;

export const AuthorInfoContainer = styled.div`
  display: flex;
`;

export const PictureContainer = styled.div`
  width: 70%;
  img {
    height: auto;
    width: 100%;
  }
`;
export const PlaceInfoContainer = styled.div`
  display: flex;
  visibility: ${({ location }) => (location ? "visible" : "hidden")};
`;
export const ButtonPrev = styled.button`
  position: fixed;

  top: 50%;
  right: 100%;
  visibility: ${({ activeIndex }) =>
    activeIndex === 0 ? "hidden" : "visible"};
`;
export const ButtonNext = styled.button`
  position: fixed;
  top: 50%;
  left: 100%;
  visibility: ${({ activeIndex }) =>
    activeIndex === 9 ? "hidden" : "visible"};
`;

export const ButtonBack = styled.button`
  position: fixed;
  top: 0;
  left: 100%;
`;
