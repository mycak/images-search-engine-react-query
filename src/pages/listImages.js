import React from "react";
import styled from "styled-components";
import bg1 from "../assets/images/bg1.jpg";
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
  background-image: url(${bg1});
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
