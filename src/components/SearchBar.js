import React, { useState } from 'react';
import styled from 'styled-components';
import history from  '../history';
import SuggestionsList from './SuggestionList';
import { countryList } from '../suggestionslist'

const FormStyles = styled.form`
  width: 100%;
  height: 100%;
  input[type=text] {
    box-sizing:border-box;
    padding: 5px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: none;
  }
`

const SearchBar = () => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const suggestions = countryList;

  const onSubmit = e => {
    history.push(`/pictures/${inputValue}`);
  }

  const onChange = e => {
    setActiveSuggestion(0);
    const input = e.target.value;

    const filteredSuggestions = suggestions.filter(
       suggestion =>
        suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );

    setFilteredSuggestions(filteredSuggestions)
    setShowSuggestions(true);
    setInputValue(input);
  };

  const onClick = e => {
    setActiveSuggestion(0)
    setFilteredSuggestions([]);
    setShowSuggestions(false)
    setInputValue(e.currentTarget.innerText);
  };

  const onKeyDown = e => {
    // Enter
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setInputValue(filteredSuggestions[activeSuggestion]);
    }
    // Up
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // Down
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <FormStyles onSubmit={onSubmit}>
      <input
        type="text"
        onKeyDown={onKeyDown}
        value={inputValue}
        onChange={onChange}
        placeholder={'Search for images !'}
      />
      <SuggestionsList
        activeSuggestion={activeSuggestion}
        inputValue={inputValue}
        showSuggestions={showSuggestions}
        filteredSuggestions={filteredSuggestions}
        onClick={onClick}
      />
    </FormStyles>
  );
};

export default SearchBar;