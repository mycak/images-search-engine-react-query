import React from "react";
import { ListStyles } from "./styles/SearchbarStyles";

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
