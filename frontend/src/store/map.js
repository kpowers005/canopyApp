import { csrfFetch } from './csrf';

const KEY = 'map/KEY'

const get = key => ({
  type: KEY,
  key
});




export const mapKey = () => async dispatch => {

  const res = await csrfFetch('/api/map')

  if (res.ok) {
    const key = await res.json();
    dispatch(get(key))
  }
};



const mapReducer = (state = {}, action) => {
  const newState = {...state};

  switch (action.type) {
    case KEY:
        return {'key' : action.key}
    default:
      return newState
  }
}


export default mapReducer;
