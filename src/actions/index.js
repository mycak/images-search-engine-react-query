import unsplash from '../api/unsplash';

export const fetchQueries = (term) => async dispatch => {
  const response = await unsplash.get('/search/photos/',{
    params: {query: term}
  });
  dispatch ({ type: 'FETCH_QUERIES', payload: response.data.results });
};

export const fetchCurrentPicture = (id) => async dispatch => {
  const response = await unsplash.get(`/photos/${id}`);
  dispatch ({ type: 'FETCH_CURRENT_PICTURE', payload: response.data });
};
