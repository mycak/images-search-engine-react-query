import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchQueries } from '../actions'
import { connect } from 'react-redux';
import history from  '../history';

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
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if(inputValue.length >= 3){
      props.fetchQueries(inputValue);
    }
  }, [inputValue, props])

  const onChange = e => {
    setInputValue(e.target.value);
  }
  const onSubmit = e => {
    history.push(`/pictures/${inputValue}`);
  }

  return (
    <FormStyles onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder={'Search for images !'}
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