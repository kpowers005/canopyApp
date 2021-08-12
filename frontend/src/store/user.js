import { csrfFetch } from './csrf';



const USER = 'user/USER';


const get = reviews => ({
  type: USER,
  reviews
});


export const getUserReviews = (id) => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}`);

  if (res.ok) {
    const reviews = await res.json();

    dispatch(get(reviews));
  }
};


const userReducer = (state = {}, action) => {
  const newState = { ...state }
  switch(action.type) {
    case USER:
      {
        const res = {}
        action.reviews.forEach(review => {
          res[review.id] = review;
        });
        return res;

      }
    default:
      return state
  }
}

export default userReducer;
