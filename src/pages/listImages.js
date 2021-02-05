import React from "react";
import styled from "styled-components";
import bg from "../assets/images/bg2.jpeg";
import ImageList from "../components/ImageList";
import Searchbar from "../components/Searchbar";

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchbarSectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 40vh;
  background-image: url(${bg});
  background-size: cover;
`;

const ListImagesSite = ({ match }) => {
  const query = match.params.query;
  return (
    <SiteContainer>
      <SearchbarSectionStyles>
        <Searchbar />
      </SearchbarSectionStyles>
      <ImageList query={query} />
    </SiteContainer>
  );
};
export default ListImagesSite;
