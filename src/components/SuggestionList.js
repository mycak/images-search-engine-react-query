import React from 'react';
import styled from 'styled-components';

const ListStyles = styled.ul`
  z-index: 2;
  padding: 0;
  background-color: #fff;
  border-radius: 4px;
  list-style: none;
  margin-top: 3px;
  max-height: 30vh;
  overflow-y: auto;
  width: 100%;
  li, p {
    font-size: clamp(12px, 2vw, 20px);
    margin: 0;
    padding: 2px;
    color: #929296;
    &:hover, &.active {
      background-color: #d0d0db;
      color: #000000;
      cursor: pointer;
    }
  }
`;

const SuggestionsList = ({inputValue, showSuggestions, filteredSuggestions, onClick, activeSuggestion}) => {
  if (showSuggestions && inputValue.length > 2 && inputValue !== filteredSuggestions[0]) {
    if (filteredSuggestions.length) {
      return (
        <ListStyles>
          {filteredSuggestions.slice(0,4).map((suggestion, i) => {
            const isActive = (i+1) === activeSuggestion ?'active':'';
            return (
              <li key={suggestion} onClick={onClick} className={isActive}>
                {suggestion}
              </li>
            );
          })}
        </ListStyles>
      )
    } else {
      return (
        <ListStyles>
          <p>There isn't suggestion !</p>
        </ListStyles>
      )
    }
  }
  return (
    <div></div>
  )
};

export default SuggestionsList;