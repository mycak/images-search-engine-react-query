import React, { useState } from "react";
import unsplash from "../api/unsplash";
import { useQuery } from "react-query";
import ModalContainer from "./ModalContainer";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import { ImageListStyles } from "./styles/ImageListStyles";
import { customStyles } from "./styles/ModalStyles";
Modal.setAppElement("#modal");

const ImageList = ({ query }) => {
  const { isLoading, error, data } = useQuery(query, () =>
    unsplash.get("/search/photos/", {
      params: { query },
    })
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const onClick = (e) => {
    setIsModalOpen(true);
    setCurrentId(e.target.dataset.id);
  };

  return (
    <>
      {data && (
        <ImageListStyles>
          {!data.data.results.length && <p> No results.</p>}
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data.data.results.map((image, i) => {
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
          <Modal
            isOpen={isModalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => setIsModalOpen(false)}
            style={customStyles}
            contentLabel="singleImage"
          >
            <ModalContainer
              closeModal={() => setIsModalOpen(false)}
              currentId={currentId}
              imagesData={data.data.results}
            ></ModalContainer>
          </Modal>
        </ImageListStyles>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default ImageList;
