import { csrfFetch } from './csrf';


const FIND = 'reviews/FIND';
const ADD = 'reviews/ADD';


const reviewFind = reviews => ({
  type: FIND,
  reviews
});

const add = review => ({
  type: ADD,
  review
});


export const getReviews = (treehouseid) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${treehouseid}`);

  if (res.ok) {
    const reviews = await res.json();
    dispatch(reviewFind(reviews));
  }
};


export const addReview = (newReview) => async dispatch => {
  const res = await csrfFetch('/api/reviews', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({newReview})
  });

  if (res.ok) {
    const review = await res.json();
    dispatch(add(review));
  }
}


const reviewReducer = (state = {}, action) => {
  switch(action.type) {
    case FIND:
      {
        const allReviews = {};
        action.reviews.forEach(review => {
          allReviews[review.id] = review;
        });
        return {
          ...state,
          ...allReviews,
        }
      }
    case ADD:
      {
        return {
          ...state,
          ...action.review
        }
      }
    default:
      return state;
  };

}

export default reviewReducer;
