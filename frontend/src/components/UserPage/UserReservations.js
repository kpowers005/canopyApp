import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cancelReservation } from '../../store/reservations';
import { Link } from 'react-router-dom';
import './UserReservations.css'




function UserReservations ({reservation}) {
  const dispatch = useDispatch();
  const [cancelRes, setCancelRes] = useState(false);

  const day = () => {
    const inTime = new Date(reservation.checkIn);
    const outTime = new Date(reservation.checkOut);
    return {in: inTime.getDate(), out: outTime.getDate()}
  }
  const month = () => {
    const inTime = new Date(reservation.checkIn)
    const outTime = new Date(reservation.checkOut)
    const index = inTime.getMonth();
    const outdex = outTime.getMonth()
    const months = ['January', 'February', 'March',
     'April', 'May', 'June', 'July', 'August',
     'September', 'October', 'November', 'December'];
     return {in: months[index], out: months[outdex]}
  }

  return(
    <div>
      {reservation && <div className='userReservations_container'>
          <Link style={{textDecoration: 'none'}} to={`/treehouses/${reservation.Treehouse.id}`}>
            <img className='userReservations_img' alt='treehouse' src={reservation.Treehouse.image1}></img>
            <div className='userReservations_details'>
              <h5>Reservation Details</h5>
              <div>Check In: {month().in}, {day().in} </div>
              <div>Check Out: {month().out}, {day().out}</div>
              <div>Number of guests: {reservation.guests}</div>
              <div>Total: ${reservation.total}</div>
            </div>
          </Link>

          {cancelRes ? <div className='reservationCancellation'>
                <span>Are you sure?<button onClick={() => dispatch(cancelReservation(reservation.id))}>Yes</button><button onClick={() => setCancelRes(false)}>No</button></span>
                </div>
              : <button onClick={() => setCancelRes(!cancelRes)}>Cancel Reservation</button>
              }
        </div>}
    </div>
  )

};




export default UserReservations;
