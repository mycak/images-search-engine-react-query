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
    padding: ".8em 0 .8em 0",
    overflow: "visible",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.6)",
  },
};

export const ImageInfoStyles = styled.div`
  background-color: #fff;
  overflow-y: auto;
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    position: fixed;
    background-color: transparent;
    cursor: pointer;
    filter: brightness(0) invert(1);
    border: none;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`;

export const AuthorInfoContainer = styled.div`
  display: flex;
  gap: 0.2em;
`;

export const PictureContainer = styled.div`
  width: 70%;
  img {
    height: auto;
    width: 100%;
  }
  @media screen and (max-width: 980px) {
    width: 90%;
  }
`;
export const PlaceInfoContainer = styled.div`
  display: flex;
  gap: 0.2em;
  visibility: ${({ location }) => (location ? "visible" : "hidden")};
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 1em 0 1em;
  }
`;
export const ButtonPrev = styled.button`
  top: 50%;
  right: 100%;
  width: 2em;
  transform: translateY(-50%) rotate(180deg);
  visibility: ${({ first }) => (first ? "hidden" : "visible")};
`;
export const ButtonNext = styled.button`
  top: 50%;
  left: 100%;
  width: 2em;
  transform: translateY(-50%);
  visibility: ${({ isLast }) => (isLast ? "hidden" : "visible")};
`;

export const ButtonBack = styled.button`
  top: -1%;
  left: 101%;
  width: 1em;
  background-color: transparent;
`;

export const ModalIcon = styled.img`
  width: 100%;
`;

export const SpanLink = styled.span`
  a {
    font-size: 0.7em;
    color: #a0a0a0;
  }
`;
