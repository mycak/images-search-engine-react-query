import unsplash from '../api/unsplash';

export const fetchQueries = (term) => async dispatch => {
  //pictures data
  const response = await unsplash.get('/search/photos/',{
    params: {query: term}
  });
  // const dataPictures = response.data.results;
  // //list of tags
  // const listTags = [];
  // dataPictures.forEach(image => {
  //   image.tags.forEach(tag => {
  //     listTags.push(tag.title);
  //   })
  //   if(image.alt_description){
  //     const descrptionWords = image.alt_description.split(' ');
  //     listTags.push(...descrptionWords)
  //   }
  // })

  // console.log(listTags)


  dispatch ({ type: 'FETCH_QUERIES', payload: response.data.results });
  // dispatch ({ type: 'FETCH_TAGS', payload: listTags });
};
