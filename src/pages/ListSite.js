import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import { connect } from 'react-redux';

const ListSiteWrapper = styled.div `
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .searchbar--container {
    width: 40vw;
    height: 6vh;
  }
`
const ListSite = (props) => {
  console.log(props)
  return (
    <ListSiteWrapper>
      <div className="searchbar--container">
        <SearchBar />
      </div>
      <div className="pictures--container">
        <ImageList />
      </div>
    </ListSiteWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
      pictures: state
  }
}

export default connect(mapStateToProps)(ListSite);