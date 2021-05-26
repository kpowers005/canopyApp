import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { getReservations } from "../../store/reservations";
import UserReservations from './UserReservations';
import './index.css';


function User() {
  const user = useSelector(state => state.session.user);
  const reservations = useSelector(state => state.reservations);
  const resArray = Object.values(reservations);
  const reviews = useSelector(state => state.reviews);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReservations(user))
  }, [user])

  if (!user){
    return <Redirect to='/' />
  }
  return (
    <div className='userPage_container'>
      <div className='userPage_user'>
          <h3>Hello, {user.firstName} {user.lastName}</h3>
      </div>
      <div className='userPage_reservations'>
          <div className='upcomingStays'><h3>Upcoming Stays</h3></div>
          <div>|</div>
          {resArray.map(res => {
           return  <Link style={{textDecoration: 'none'}} to={`/treehouses/${res.Treehouse.id}`}><UserReservations key={res.id} reservation={res}></UserReservations></Link>
          })}
      </div>
    </div>
  )
}



export default User;
