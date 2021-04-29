import { csrfFetch } from './csrf';


const FIND = 'reviews/FIND'


const reviewFind = reviews => ({
  type: FIND,
  reviews
});


export const getReviews = (treehouseid) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${treehouseid}`);

  if (res.ok) {
    const reviews = await res.json();
    dispatch(reviewFind(reviews));
  }
};

const reviewReducer = (state = {}, action) => {
  const newState = { ...state }
  switch(action.type) {
    case FIND:
      {
        const allReviews = {};
        action.reviews.forEach(review => {
          allReviews[review.id] = review;
        });

        return {
          ...allReviews,
          ...state,
        }
      }
    default:
      return state;
  };

}

export default reviewReducer;
