import React, { useState } from "react";
import { useQuery } from "react-query";
import unsplash from "../api/unsplash";
import {
  ImageInfoStyles,
  ButtonNext,
  ButtonPrev,
  ButtonBack,
  PlaceInfoContainer,
  PictureContainer,
  AuthorInfoContainer,
} from "./styles/ModalStyles";

const ModalImage = ({ imagesData, currentId, closeModal }) => {
  const [activeIndex, seActiveIndex] = useState(parseInt(currentId));
  const query = imagesData[activeIndex].id;
  const { isLoading, error, data } = useQuery(query, () =>
    unsplash.get(`/photos/${query}`)
  );
  const goTo = (e) => {
    const direction = e.target.dataset.direction;
    if (direction === "next" && activeIndex !== 9) {
      seActiveIndex((prevState) => prevState + 1);
    } else if (activeIndex !== 0 && direction === "prev") {
      seActiveIndex((prevState) => prevState - 1);
    }
  };
  return (
    <>
      {data && (
        <ImageInfoStyles
          activeIndex={activeIndex}
          onClick={(e) => e.stopPropagation()}
        >
          <AuthorInfoContainer>
            <a href={data.data.user.links.html}>{`${
              data.data.user.first_name
            } ${data.data.user.last_name ? data.data.user.last_name : ""}`}</a>
            <a
              href={data.data.user.links.html}
            >{`@${data.data.user.first_name}`}</a>
          </AuthorInfoContainer>
          <PictureContainer>
            <img alt={data.data.alt_description} src={data.data.urls.regular} />
          </PictureContainer>
          <PlaceInfoContainer location={data.data.location.name}>
            <p>{data.data.location.name}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${data.data.location.position.latitude},${data.data.location.position.longitude}`}
            >
              Google Maps
            </a>
          </PlaceInfoContainer>
          <ButtonPrev
            activeIndex={activeIndex}
            data-direction="prev"
            onClick={goTo}
          >
            Go to prev
          </ButtonPrev>
          <ButtonBack onClick={closeModal}>Go back</ButtonBack>
          <ButtonNext
            activeIndex={activeIndex}
            data-direction="next"
            onClick={goTo}
          >
            Go to next
          </ButtonNext>
        </ImageInfoStyles>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default ModalImage;
