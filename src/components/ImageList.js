import React, { useEffect, useState } from "react";
import unsplash from "../api/unsplash";
import { useQuery } from "react-query";
import ModalImage from "./ModalImage";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import history from "../utils/history";
import { ImageListStyles } from "./styles/ImageListStyles";
import { customStyles } from "./styles/ModalStyles";
Modal.setAppElement("#modal");

const ImageList = ({ query, id }) => {
  const { isLoading, error, data } = useQuery(query, () =>
    unsplash.get("/search/photos/", {
      params: { query },
    })
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (data && id && !isModalOpen) {
      const results = data.data.results;
      const index = results.map((item) => item.id).indexOf(id);
      setCurrentId(index);
      setIsModalOpen(true);
    }
  }, [data, id, isModalOpen]);

  const onClick = (e) => {
    setCurrentId(e.target.dataset.id);
    setIsModalOpen(true);
    history.push(
      `/pictures/${query}/${
        data.data.results[parseInt(e.target.dataset.id)].id
      }`
    );
  };
  return (
    <>
      {data && (
        <ImageListStyles>
          {!data.data.results.length && <p> No results.</p>}
          <Masonry
            breakpointCols={{ 300: 1, 700: 2, 950: 3 }}
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
            onRequestClose={() => {
              history.push(`/pictures/${query}`);
              setIsModalOpen(false);
            }}
            style={customStyles}
            contentLabel="singleImage"
          >
            <ModalImage
              mainQuery={query}
              id={id}
              closeModal={() => {
                history.push(`/pictures/${query}`);
                setIsModalOpen(false);
              }}
              currentId={currentId}
              imagesData={data.data.results}
            ></ModalImage>
          </Modal>
        </ImageListStyles>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default ImageList;
