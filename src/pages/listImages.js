import React from "react";
import styled from "styled-components";
import unsplash from "../api/unsplash";
import bg1 from "../assets/images/bg1.jpg";
import { useQuery } from "react-query";
import ImageList from "../components/ImageList";
import SearchBar from "../components/SearchBar";

const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBarSectionStyles = styled.div`
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

  const { isLoading, error, data } = useQuery(query, () =>
    unsplash.get("/search/photos/", {
      params: { query },
    })
  );

  return (
    <SiteContainer>
      <SearchBarSectionStyles>
        <SearchBar />
      </SearchBarSectionStyles>
      {isLoading && <p>Loading...</p>}
      {error && <p>Argh... Something went wrong !</p>}
      {data && <ImageList imagesData={data.data.results} />}
    </SiteContainer>
  );
};
export default ListImagesSite;
