import React from 'react';
import styled from 'styled-components';

const ListStyles = styled.ul`
  padding: 0;
  background-color: #fff;
  border-radius: 4px;
  list-style: none;
  margin-top: 3px;
  max-height: 30vh;
  overflow-y: auto;
  width: 100%;
  li, p {
    margin: 0;
    padding: 2px;
    color: #929296;
    &:hover {
      background-color: #d0d0db;
      color: #000000;
      cursor: pointer;
    }
  }
`

const SuggestionsList = ({inputValue, showSuggestions, filteredSuggestions, onClick}) => {

  if (showSuggestions && inputValue.length > 2) {
    if (filteredSuggestions.length) {
      return (
        <ListStyles>
          {filteredSuggestions.map((suggestion, index) => {
            // let className;
            // // Flag the active suggestion with a class
            // if (index === activeSuggestion) {
            //   className = "suggestion-active";
            // }
            return (
              <li key={suggestion} onClick={onClick}>
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
}

export default SuggestionsList;