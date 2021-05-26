import './UserReservations.css'



function UserReservations ({reservation}) {
console.log(reservation)
  return(
    <div>
      <div className='userReservations_container'>
        <img className='userReservations_img' alt='treehouse image' src={reservation.Treehouse.image1}></img>
        <div className='userReservations_details'>
          <h5>Reservation Details</h5>
          <div>Check In: {reservation.checkIn} </div>
          <div>Check Out: {reservation.checkOut}</div>
          <div>Number of guests: {reservation.guests}</div>
        </div>
      </div>
    </div>
  )

};




export default UserReservations;
