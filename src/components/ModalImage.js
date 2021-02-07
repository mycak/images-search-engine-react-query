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
  SpanLink,
} from "./styles/ModalStyles";

const ModalImage = ({ imagesData, currentId, mainQuery, id, closeModal }) => {
  const [activeIndex, seActiveIndex] = useState(parseInt(currentId));
  const query = imagesData[activeIndex].id;
  const isFirstInArray = activeIndex === 0 ? true : false;
  const isLastInArray = activeIndex === imagesData.length - 1 ? true : false;
  console.log(isFirstInArray, isLastInArray);

  const { isLoading, error, data } = useQuery(query, () => {
    return unsplash.get(`/photos/${query}`);
  });

  const goTo = (e) => {
    const direction = e.target.parentElement.dataset.direction;
    if (direction === "next") {
      seActiveIndex((prevState) => prevState + 1);
      history.push(`/pictures/${mainQuery}/${imagesData[activeIndex + 1].id}`);
    } else if (direction === "prev") {
      seActiveIndex((prevState) => prevState - 1);
      history.push(`/pictures/${mainQuery}/${imagesData[activeIndex - 1].id}`);
    }
  };

  return (
    <>
      {data && (
        <ImageInfoStyles activeIndex={activeIndex}>
          <AuthorInfoContainer>
            <p>{`${data.data.user.first_name} ${
              data.data.user.last_name ? data.data.user.last_name : ""
            }`}</p>
            <SpanLink>
              <a
                href={data.data.user.links.html}
              >{`@${data.data.user.first_name}`}</a>
            </SpanLink>
          </AuthorInfoContainer>
          <PictureContainer>
            <img alt={data.data.alt_description} src={data.data.urls.regular} />
          </PictureContainer>
          <PlaceInfoContainer location={data.data.location.name}>
            <p>{data.data.location.name}</p>
            <SpanLink>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${data.data.location.position.latitude},${data.data.location.position.longitude}`}
              >
                Google Maps
              </a>
            </SpanLink>
          </PlaceInfoContainer>
          <ButtonPrev
            first={isFirstInArray}
            data-direction="prev"
            onClick={goTo}
          >
            <ModalIcon src={iconPagination} alt="exit" />
          </ButtonPrev>
          <ButtonBack onClick={closeModal}>
            <ModalIcon src={iconExit} alt="exit" />
          </ButtonBack>
          <ButtonNext
            isLast={isLastInArray}
            data-direction="next"
            onClick={goTo}
          >
            <ModalIcon src={iconPagination} alt="exit" />
          </ButtonNext>
        </ImageInfoStyles>
      )}
      {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default ModalImage;
