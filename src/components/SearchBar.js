import React, { useState } from 'react';
import styled from 'styled-components';
import history from  '../history';
import { fetchQueries } from '../actions'
import { connect } from 'react-redux';
import SuggestionsList from './SuggestionList';

const FormStyles = styled.form`
  width: 100%;
  height: 100%;
  input[type=text] {
    box-sizing:border-box;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: none;
  }
`

const SearchBar = (props) => {
  // const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    "Alligator",
    "allin",
    "Bask",
    "Crocodilian",
    "Death Roll",
    "Eggs",
    "Jaws",
    "Reptile",
    "Solitary",
    "Tail",
    "Wetlands"
  ];

  const onSubmit = e => {
    history.push(`/pictures/${inputValue}`);
  }

  const onChange = e => {
    const input = e.target.value;
    // Fetch data
    if(input.length >= 3){
      props.fetchQueries(input);
    }
    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    // setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions)
    setShowSuggestions(true);
    setInputValue(e.target.value);
  };

  const onClick = e => {
    // setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false)
    setInputValue(e.currentTarget.innerText);
  };

  return (
    <FormStyles onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder={'Search for images !'}
      />
      <SuggestionsList
        inputValue={inputValue}
        showSuggestions={showSuggestions}
        filteredSuggestions={filteredSuggestions}
        onClick={onClick}
      />
    </FormStyles>
  );
};

const mapStateToProps = (state) => {
  return {
      pictures: state
  }
}

export default connect(mapStateToProps, {fetchQueries})(SearchBar);