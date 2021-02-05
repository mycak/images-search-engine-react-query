import React, { useState } from "react";
import ModalWindow from "./ModalWindow";
import { useQuery } from "react-query";
import unsplash from "../api/unsplash";

const ModalContainer = ({ imagesData, currentId, closeModal }) => {
  const [activeIndex, seActiveIndex] = useState(parseInt(currentId));
  const query = imagesData[currentId].id;
  const { isLoading, error, data } = useQuery(query, () =>
    unsplash.get(`/photos/${query}`)
  );

  const goBack = () => {
    closeModal();
  };
  const goToNext = () => {
    if (activeIndex !== 9) {
      const nextId = activeIndex + 1;
      seActiveIndex(nextId);
    }
  };
  const goToPrev = () => {
    if (activeIndex !== 0) {
      const nextId = activeIndex - 1;
      seActiveIndex(nextId);
    }
  };

  return (
    <>
      {data && (
        <ModalWindow
          goBack={goBack}
          goToNext={goToNext}
          goToPrev={goToPrev}
          activeIndex={activeIndex}
          firstName={data.data.user.first_name}
          lastName={data.data.user.last_name}
          userName={data.data.user.username}
          unsplashProfile={data.data.user.links.html}
          srcImage={data.data.urls.regular}
          altImage={data.data.alt_description}
          locationName={data.data.location.name}
          locationPosition={data.data.location.position}
        />
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default ModalContainer;
