import styled from "styled-components";

export const FormStyles = styled.form`
  width: 60%;
  input[type="search"] {
    font-size: clamp(12px, 2vw, 20px);
    padding: 5px;
    width: 100%;
    border-radius: 4px;
    border: none;
  }
  input[type="search"]::placeholder {
    font-size: clamp(12px, 2vw, 20px);
  }
  input[type="search"]:focus {
    border: none;
    outline: none;
  }
`;

export const ListStyles = styled.ul`
  position: absolute;
  margin-top: 3px;
  z-index: 2;
  background-color: #fff;
  border-radius: 4px;
  list-style: none;
  width: inherit;
  li,
  p {
    font-size: clamp(12px, 2vw, 20px);
    padding: 2px;
    color: #929296;
    &:hover,
    &.active {
      background-color: #d0d0db;
      color: #000000;
      cursor: pointer;
    }
  }
`;
