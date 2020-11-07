import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const SiteContainer = styled.div`
  background-image: url('https://cdn.pixabay.com/photo/2016/11/06/05/36/landscape-1802337_960_720.jpg');
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
`
const MainSite = () => {
  return (
    <SiteContainer>
      <div className="searchBar--container">
        <SearchBar />
      </div>
    </SiteContainer>
  );
};

export default MainSite;