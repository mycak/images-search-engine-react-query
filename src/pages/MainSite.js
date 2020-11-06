import React from 'react';
import styled from 'styled-components';
import Searchbar from '../components/SearchBar';

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
  .searchbar--container {
    width: 40vw;
    height: 6vh;
  }
`
const MainSite = () => {
  return (
    <SiteContainer>
      <div className="searchbar--container">
        <Searchbar />
      </div>
    </SiteContainer>
  );
};

export default MainSite;