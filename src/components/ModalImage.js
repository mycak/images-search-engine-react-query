import React, { useState } from "react";
import { useQuery } from "react-query";
import unsplash from "../api/unsplash";
import history from "../utils/history";
import iconExit from "../assets/images/exit.svg";
import iconPagination from "../assets/images/pagination.svg";
import {
  ImageInfoStyles,
  ButtonNext,
  ButtonPrev,
  ButtonBack,
  PlaceInfoContainer,
  PictureContainer,
  AuthorInfoContainer,
  ModalIcon,
} from "./styles/ModalStyles";

const ModalImage = ({ imagesData, currentId, mainQuery, id, closeModal }) => {
  const [activeIndex, seActiveIndex] = useState(parseInt(currentId));
  const query = imagesData[activeIndex].id;
  const { isLoading, error, data } = useQuery(query, () => {
    return unsplash.get(`/photos/${query}`);
  });

  const goTo = (e) => {
    const direction = e.target.parentElement.dataset.direction;
    if (direction === "next" && activeIndex !== 9) {
      seActiveIndex((prevState) => prevState + 1);
      history.push(`/pictures/${mainQuery}/${imagesData[activeIndex + 1].id}`);
    } else if (activeIndex !== 0 && direction === "prev") {
      seActiveIndex((prevState) => prevState - 1);
      history.push(`/pictures/${mainQuery}/${imagesData[activeIndex - 1].id}`);
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
            <ModalIcon src={iconPagination} alt="exit" />
          </ButtonPrev>
          <ButtonBack onClick={closeModal}>
            <ModalIcon src={iconExit} alt="exit" />
          </ButtonBack>
          <ButtonNext
            activeIndex={activeIndex}
            data-direction="next"
            onClick={goTo}
          >
            <ModalIcon src={iconPagination} alt="exit" />
          </ButtonNext>
        </ImageInfoStyles>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default ModalImage;
