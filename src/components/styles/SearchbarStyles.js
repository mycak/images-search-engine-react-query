import styled from "styled-components";

export const FormStyles = styled.form`
  width: 60%;
  input[type="search"] {
    padding: 5px;
    width: 100%;
    border-radius: 2px;
    border: none;
  }
  input[type="search"]::placeholder {
    font-size: 1em;
  }
  input[type="search"]:focus {
    border: none;
    outline: none;
  }
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const ListStyles = styled.ul`
  position: absolute;
  margin-top: 3px;
  background-color: #fff;
  border-radius: 2px;
  list-style: none;
  width: inherit;
  li,
  p {
    padding: 2px 0 2px 5px;
    color: #929296;
    &:hover,
    &.active {
      background-color: #d0d0db;
      color: #000000;
      cursor: pointer;
    }
  }
`;
