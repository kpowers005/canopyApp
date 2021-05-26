import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addReservation } from '../../store/reservations';
import './BookingForm.css'

function BookingForm ({ user, tree }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [canBook, setCanBook] = useState(true);
  const [confirmation, setConfirmation] = useState(false);
  const [moneys, setMoneys] = useState(0);
  const [arrive, setArrive] = useState(0);
  const [leave, setLeave] = useState(0);
  const [guests, setGuests] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [endDate, setEndDate] = useState(0);


  const dispatch = useDispatch();


  useEffect(() => {
    if(!user) {
      setCanBook(true);
    } else if (user) {
      setCanBook(false);
    };

    const inSplit = checkIn.split('-');
    const outSplit = checkOut.split('-')
    setArrive(Number(inSplit[2]));
    setLeave(Number(outSplit[2]));
    setStartDate(new Date(checkIn));
    setEndDate(new Date(checkOut));

    console.log(endDate - startDate)

    const newMoney = (leave - arrive) * tree.rate
    setMoneys(newMoney);

  }, [user, checkIn, checkOut, setArrive, setLeave, setMoneys, arrive, leave, tree.rate, setStartDate, setEndDate])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReservation = {
      total: moneys,
      checkIn,
      checkOut,
      guests,
      userId: user.id,
      treehouseId: tree.id,
    }

    const booked = await dispatch(addReservation(newReservation));



    if (booked) {
      setCheckIn('');
      setCheckOut('');
      setGuests(0);
      setConfirmation(false);
      setMoneys(0);
      setLeave(0)
      setArrive(0)
      setStartDate(0)
      setEndDate(0)
    }

  };

  return (
    <div className='bookingform-container'>
      <h3>Reservations</h3>
      {((endDate - startDate) < 1) && <p className='bookingform-error'>Please check dates...Check in must be an earlier date than Check out</p>}
      <form className='bookingform-form' onSubmit={handleSubmit}>
        <span>
        <label>Check in:</label>
        <input className='bookingform-dates' placeholder='Check in' type='date' onChange={e => setCheckIn(e.target.value)} value={checkIn}></input>
        <label>Check out:</label>
        <input className='bookingform-dates' placeholder='Check out' type='date' onChange={e => setCheckOut(e.target.value)} value={checkOut}></input>
        </span>
        <input className='bookingform-guests' type='number' placeholder='# of guests' value={guests} onChange={e => setGuests(e.target.value)}></input>
        <button disabled={((endDate - startDate) > 1) ? false : true}type='button' onClick={() => setConfirmation(true)}>Confirm?</button>
        {confirmation &&
        <div className='bookingform-confirmation'>
          <h4>Is this correct?</h4>
          <div>Check in: <span className='bookingform-variables'>{checkIn}</span></div>
          <div>Check out: <span className='bookingform-variables'>{checkOut}</span></div>
          <div>Number of guests: <span className='bookingform-variables'>{guests}</span></div>
          <div>Total for <span className='bookingform-variables'>{endDate - startDate}</span> nights: <span className='bookingform-variables'>${moneys}</span> </div>
          <button disabled={canBook} type='submit'>Confirm Booking</button>
          <button type='button' onClick={() => setConfirmation(false)}>Cancel</button>
          </div>}
      </form>
    </div>
  )
}
export default BookingForm;
