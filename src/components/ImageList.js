import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Masonry from "react-masonry-css";

const ImageListStyles = styled.div`
  width: 98%;
  margin: 1em auto 1em auto;
  text-align: center;
  .picture--container img {
    width: 100%;
    height: auto;
  }
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 2px;
    padding-right: 2px;
    background-clip: padding-box;
  }
  .my-masonry-grid_column > div {
    margin-bottom: 2px;
  }
`;

const ImageList = ({ imagesData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const onClick = (e) => {
    setIsModalOpen(true);
    setCurrentId(e.target.dataset.id);
  };

  return (
    <ImageListStyles>
      {!imagesData.length && <p> No results.</p>}
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imagesData.map((image, i) => {
          return (
            <div className="picture--container" key={i}>
              <img
                onClick={onClick}
                alt={image.alt_description}
                src={image.urls.regular}
                data-id={i}
              />
            </div>
          );
        })}
      </Masonry>
      {isModalOpen && (
        <Modal
          loseModal={() => setIsModalOpen(false)}
          currentId={currentId}
          data={imagesData}
        />
      )}
    </ImageListStyles>
  );
};

export default ImageList;
