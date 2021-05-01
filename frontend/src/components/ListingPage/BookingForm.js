import { useState } from "react";

function BookingForm () {
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date())


  return (
    <div>
      <form>
        <span>
        <input placeholder='Check in' type='date' onChange={e => setCheckIn(e.target.value)} value={checkIn}></input>
        <input placeholder='Check out' type='date' onChange={e => setCheckOut(e.target.value)} value={checkOut}></input>
        </span>
        <input type='number' placeholder='# of guests'></input>
        <button type='submit'>Confirm Booking</button>
      </form>
    </div>
  )
}
export default BookingForm;
