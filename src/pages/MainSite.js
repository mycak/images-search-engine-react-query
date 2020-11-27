import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import { connect } from 'react-redux';
import { fetchPictures } from '../actions';
import bg2 from '../assets/images/bg2.webp';

const SiteContainer = styled.div`
  background-image: url(${bg2});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .searchBar--container {
    transform: translateY(-300%);
    width: 40vw;
    height: 6vh;
  }
`;

const MainSite = ({fetchPictures}) => {
  return (
    <SiteContainer>
      <div className="searchBar--container">
        <SearchBar fetchPictures={fetchPictures} />
      </div>
    </SiteContainer>
  );
};
const mapStateToProps = state => {
  return {
      state
  }
};

export default connect (mapStateToProps, { fetchPictures })(MainSite);