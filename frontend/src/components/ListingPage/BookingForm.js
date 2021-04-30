import { useState } from "react";

function BookingForm () {
  const [checkIn, setCheckIn] = useState(new Date())
  const [checkOut, setCheckOut] = useState(new Date())

  console.log(checkIn)

  return (
    <div>
      <form>
        <span><input placeholder='Check in' type='date' onChange={e => setCheckIn(e.target.value)}></input> <input type='date' placeholder='Check out'></input></span>
        <input type='number' placeholder='# of guests'></input>
        <button type='submit'>Confirm Booking</button>
      </form>
    </div>
  )
}
export default BookingForm;
