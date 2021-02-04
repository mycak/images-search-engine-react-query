import React from "react";
import styled from "styled-components";

const ListStyles = styled.ul`
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

const SuggestionsList = ({
  inputValue,
  showSuggestions,
  filteredSuggestions,
  onClick,
  activeSuggestion,
}) => {
  if (
    showSuggestions &&
    inputValue.length > 2 &&
    inputValue !== filteredSuggestions[0]
  ) {
    if (filteredSuggestions.length) {
      return (
        <ListStyles>
          {filteredSuggestions.slice(0, 4).map((suggestion, i) => {
            const isActive = i + 1 === activeSuggestion ? "active" : "";
            return (
              <li key={suggestion} onClick={onClick} className={isActive}>
                {suggestion}
              </li>
            );
          })}
        </ListStyles>
      );
    } else {
      return (
        <ListStyles>
          <p>There isn't suggestion !</p>
        </ListStyles>
      );
    }
  }
  return <div></div>;
};

export default SuggestionsList;
