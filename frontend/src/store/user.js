import { csrfFetch } from './csrf';



const USER = 'user/USER';


const getUser = info => ({
  type: USER,
  info
});


export const getUserInfo = (id) => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}`);

  if (res.ok) {
    const user = await res.json();

    dispatch(getUser(user));
  }
};


const userReducer = (state = {}, action) => {
  const newState = { ...state }
  switch(action.type) {
    case USER:
      {
        newState.info = action.info
        return newState
      }
    default:
      return state
  }
}

export default userReducer;
