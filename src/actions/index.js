import unsplash from '../api/unsplash';

export const fetchQueries = (term) => async dispatch => {
  const response = await unsplash.get('/search/photos/',{
    params: {query: term}
  });
  dispatch ({ type: 'FETCH_QUERIES', payload: response.data.results });
};
