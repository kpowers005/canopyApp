import { csrfFetch } from './csrf';


const FIND = 'reviews/FIND';
const ADD = 'reviews/ADD';
const DELETE = 'reviews/DELETE';


const reviewFind = reviews => ({
  type: FIND,
  reviews
});

const add = review => ({
  type: ADD,
  review
});

const remove = item => ({
  type: DELETE,
  item
})

export const getReviews = (treehouseid) => async dispatch => {
  const res = await csrfFetch(`/api/reviews/${treehouseid}`);

  if (res.ok) {
    const reviews = await res.json();
    console.log(reviews, 'reviewdssvf')
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

export const deleteReview = ( review ) =>  async dispatch => {
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: 'DELETE'
  });

  if(res.ok) {
    const item = await res.json();
    dispatch(remove(item))
  }
}


const reviewReducer = (state = {}, action) => {
  switch(action.type) {
    case FIND:
      {
        const allReviews = {...state};
        action.reviews.forEach(review => {
          allReviews[review.id] = review;
        });
        return allReviews;

      }
    case ADD:
      {
      const newState = {...state}
      newState[action.review.id] = action.review
      return newState;
      }
    case DELETE:
      {
        const newState = { ...state }
        delete newState[action.item]
        return newState
      }
    default:
      return state;
  };

}

export default reviewReducer;
