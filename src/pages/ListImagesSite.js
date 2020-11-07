import React, { useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import { connect } from 'react-redux';
import { fetchQueries } from '../actions';

const ListSiteWrapper = styled.div `
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .section--pictures {
    margin-top: 2em;
    margin-bottom: 2em;
    width: 100%;
    height: 100%;
  }
`
const SearchBarSectionStyles = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/20/15/31/trees-3619180_960_720.jpg');
  background-position: left bottom;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .searchBar--container {
    width: 40vw;
    height: 5vh;
  }
`

const ListImagesSite = ({query, pictures, fetchQueries}) => {
  useEffect(()=> {
    fetchQueries(query);
  },[query])

  return (
    <ListSiteWrapper>
      <SearchBarSectionStyles>
        <div className="searchBar--container">
          <SearchBar />
        </div>
      </SearchBarSectionStyles>
      <div className="section--pictures">
        <ImageList imageData={pictures} />
      </div>
    </ListSiteWrapper>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
      pictures: state.pictures,
      query: ownProps.match.params.query
  }
}

export default connect(mapStateToProps, {fetchQueries})(ListImagesSite);