import React, { useState } from 'react';
import styled from 'styled-components';
import SuggestionsList from './SuggestionList';
import { countryList } from '../suggestionslist'

const FormStyles = styled.form`
  width: 100%;
  height: 100%;
  input[type=search] {
    box-sizing:border-box;
    padding: 5px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: none;
  }
  input[type=search]::placeholder {
    font-size: clamp(10px, 1vw, 14px)
  }
`

const SearchBar = ({fetchPictures}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const suggestions = countryList.map(item => item.toLocaleLowerCase());

  const onSubmit = (e) => {
    e.preventDefault();
    fetchPictures(inputValue);
  }

  const onChange = e => {
    setActiveSuggestion(0);
    const input = e.target.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(
       suggestion =>
        suggestion.indexOf(input.toLowerCase()) > -1
    );
    setFilteredSuggestions(filteredSuggestions)
    setShowSuggestions(true);
    setInputValue(input);
  };

  const onClick = e => {
    console.log(e.currentTarget.innerText)
    // setActiveSuggestion(0)
    // setFilteredSuggestions([]);
    // setShowSuggestions(false)
    // setInputValue(e.currentTarget.innerText);
    e.preventDefault();
    fetchPictures(e.currentTarget.innerText);
  };

  const onKeyDown = e => {
    // Enter
    if (e.keyCode === 13 && showSuggestions && filteredSuggestions.length && activeSuggestion !== 0) {
      e.preventDefault();
      setShowSuggestions(false);
      setInputValue(filteredSuggestions[activeSuggestion-1]);
    }
    // Up
    if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // Down
    if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  return (
    <FormStyles onSubmit={onSubmit} >
      <input
        type="search"
        value={inputValue}
        onChange={onChange}
        placeholder={'Search for images !'}
        onKeyDown={onKeyDown}
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