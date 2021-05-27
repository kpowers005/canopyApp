import { csrfFetch } from './csrf';



const ADD = 'reservation/ADD';
const GET = 'reservation/GET';
const DELETE = 'reservation/DELETE';

const add = reservation => ({
  type: ADD,
  reservation
});

const get = reservations => ({
  type: GET,
  reservations
});

const cancel = (id) => ({
  type: DELETE,
  id
});

export const addReservation = (newReservation) => async dispatch => {

  const res = await csrfFetch('/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({...newReservation})
  });

  if (res.ok) {
    const reservation = await res.json();
    return dispatch(add(reservation));
  }
};

export const getReservations = (user) => async dispatch => {

  const res = await csrfFetch(`/api/reservations/${user.id}`);

  if (res.ok) {
    const reservations = await res.json();
    return dispatch(get(reservations));
  }
};

export const cancelReservation = (id) => async dispatch => {

  const res = await csrfFetch(`/api/reservations/${id}`, {
    method: 'DELETE'
  });

  if(res.ok) {
    dispatch(cancel(id))
  }
};


const reservationReducer = (state = {}, action) => {
  const newState = {...state};

  switch (action.type) {
    case ADD:
      {
        newState[action.reservation.id] = action.reservation
        return newState
      }
    case GET:
      {
        action.reservations.forEach(res => {
          newState[res.id] = res
        })
        return newState
      }
    case DELETE:
      {
        delete newState[action.id]
        return newState
      }
    default:
      return state;
  }
};

export default reservationReducer;
