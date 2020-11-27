import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import { connect } from 'react-redux';
import { fetchPictures, fetchCurrentPicture } from '../actions';
import bg1 from '../assets/images/bg1.jpg'

const ListSiteWrapper = styled.div `
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pictures--container {
    margin-top: 2em;
    margin-bottom: 2em;
    width: 100%;
    height: 100%;
  }
`;
const SearchBarSectionStyles = styled.div`
  width: 100%;
  height: 40vh;
  background-image: url(${bg1});
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
`;

const ListImagesSite = ({ query, pictures, fetchPictures }) => {

  return (
    <ListSiteWrapper>
      <SearchBarSectionStyles>
        <div className="searchBar--container">
          <SearchBar fetchPictures={fetchPictures} />
        </div>
      </SearchBarSectionStyles>
      <div className="pictures--container">
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
};

export default connect(mapStateToProps, { fetchPictures, fetchCurrentPicture })(ListImagesSite);