import React from "react";
import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import bg1 from "../assets/images/bg1.jpg";

const SiteContainer = styled.div`
  background-image: url(${bg1});
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainSite = () => {
  return (
    <SiteContainer>
      <Searchbar />
    </SiteContainer>
  );
};

export default MainSite;
