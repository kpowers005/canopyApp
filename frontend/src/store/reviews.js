import { csrfFetch } from './csrf';


const FIND = 'reviews/FIND';
const ADD = 'reviews/ADD';
const EDIT = 'reviews/EDIT';
const DELETE = 'reviews/DELETE';



const reviewFind = reviews => ({
  type: FIND,
  reviews
});

const add = review => ({
  type: ADD,
  review
});

const edit = change => ({
  type: EDIT,
  change
})

const remove = id => ({
  type: DELETE,
  id
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
    body: JSON.stringify({...newReview})
  });

  if (res.ok) {
    const review = await res.json();
   return dispatch(add(review));
  }
};


export const editReview = (update) => async dispatch => {
  const res = await csrfFetch('/api/reviews/edit', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({...update})
  });

  if (res.ok) {
    const review = await res.json();

    const [change] = review[1];

    return await dispatch(edit(change));
  }
}

export const deleteReview = ( review ) =>  async dispatch => {

  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: 'DELETE'
  });

  if(res.ok) {
    dispatch(remove(review.id))
  }
}


const reviewReducer = (state = {}, action) => {
  const newState = { ...state }
  switch(action.type) {
    case FIND:
      {
        const res = {}
        action.reviews.forEach(review => {
          res[review.id] = review;
        });
        return res;

      }
    case ADD:
      {
      newState[action.review.id] = action.review
      return newState;
      }
    case DELETE:
      {
        delete newState[action.id]
        return newState
      }
    case EDIT:
      {
        const newState = { ...state,
        [action.change.id]: {
          ...state[action.change.id],
          body: action.change.body
        }
        }
        return newState
      }
    default:
      return state;
  };

}

export default reviewReducer;
