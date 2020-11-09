import unsplash from '../api/unsplash';
import history from  '../history';

export const fetchPictures = (term) => async dispatch => {
  const response = await unsplash.get('/search/photos/',{
    params: {query: term}
  });
  dispatch ({ type: 'FETCH_PICTURES', payload: response.data.results });
    history.push(`/pictures/${term}`)
};

export const fetchCurrentPicture = (id) => async dispatch => {
  const response = await unsplash.get(`/photos/${id}`);
  dispatch ({ type: 'FETCH_CURRENT_PICTURE', payload: response.data });
};

export const removeCurrentPictureData = () => {
  return {
    type: 'REMOVE_CURRENT_PICTURE_DATA'
  };
};
