import { csrfFetch } from './csrf';



const ADD = 'reservation/ADD';

const add = reservation => ({
  type: ADD,
  reservation
})

export const addReservation = (newReservation) => async dispatch => {
  const res = await csrfFetch('/api/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({newReservation})
  });

  if (res.ok) {
    const reservation = await res.json();
    return dispatch(add(reservation));
  }
};


const reservationReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      {
        const newState = {
          ...state,
          [action.reservation.id]: action.reservation
        }
        return newState
      }
    default:
      return state;
  }
};

export default reservationReducer;
