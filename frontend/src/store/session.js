import { csrfFetch } from './csrf';

const SET_SESSION = 'user/SET_SESSION'
const END_SESSION = 'user/END_SESSION'

export const setSession = (user) => {
  return {
    type: SET_SESSION,
    session: user
  }

}

export const endSession = () => {
  return {
    type: END_SESSION,
  }
}

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setSession(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setSession(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(endSession());
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setSession(data.user));
  return response;
};

const initialState = { user: null };

export const sessionReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case SET_SESSION:
      newState = { ...state };
      newState.user = action.session;
      return newState;
    case END_SESSION:
      newState = { ...state };
      newState.user = null;
      return newState
    default:
      return state;
  }
};


export default sessionReducer;
