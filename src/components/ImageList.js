import React, { useEffect, useState } from 'react';
import unsplash from '../api/unsplash';
import { useQuery } from 'react-query';
import ModalImage from './ModalImage';
import Masonry from 'react-masonry-css';
import Modal from 'react-modal';
import history from '../utils/history';
import {
  ImageListStyles,
  AddMoreButton,
  ModalIcon,
} from './styles/ImageListStyles';
import { customStyles } from './styles/ModalStyles';
import arrowDown from '../assets/images/arrowDown.svg';
Modal.setAppElement('#modal');

const ImageList = ({ query, id }) => {
  const [multiplier, setMultiplier] = useState(1);

  const { isLoading, error, data } = useQuery(
    [query, multiplier],
    async () => {
      let data = [];
      let newData = [];
      for (let i = 1; i <= multiplier; i++) {
        newData = await unsplash.get('/search/photos/', {
          params: { query, page: i },
        });
        data = [...data, ...newData.data.results];
      }

      return data;
    },
    { keepPreviousData: true }
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    if (data && id && !isModalOpen) {
      const results = data;
      const index = results.map((item) => item.id).indexOf(id);
      if (index !== -1) {
        setCurrentId(index);
        setIsModalOpen(true);
      } else {
        setCurrentId(10);
        setIsModalOpen(true);
      }
    }
  }, [data, id, isModalOpen]);

  const onClick = (e) => {
    setCurrentId(e.target.dataset.id);
    setIsModalOpen(true);
    history.push(
      `/pictures/${query}/${data[parseInt(e.target.dataset.id)].id}`
    );
  };
  const addMoreImages = () => {
    setMultiplier((prevState) => prevState + 1);
  };
  return (
    <>
      {data && (
        <ImageListStyles>
          {!data.length && <p> No results.</p>}
          <Masonry
            breakpointCols={{ default: 3, 420: 1, 980: 2 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data.map((image, i) => {
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
              imagesData={data}
            ></ModalImage>
          </Modal>
          <AddMoreButton onClick={addMoreImages}>
            <ModalIcon src={arrowDown} alt="exit" />
          </AddMoreButton>
        </ImageListStyles>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default ImageList;
