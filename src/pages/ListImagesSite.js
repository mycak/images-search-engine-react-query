import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
// import ImageList from "../components/ImageList";
import bg1 from "../assets/images/bg1.jpg";

const ListSiteWrapper = styled.div`
  min-height: 100vh;
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
  console.log(query);
  return (
    <ListSiteWrapper>
      <SearchBarSectionStyles>
        <SearchBar />
      </SearchBarSectionStyles>
      {/* <div className="pictures--container">
        <ImageList imageData={pictures} />
      </div> */}
    </ListSiteWrapper>
  );
};
export default ListImagesSite;
