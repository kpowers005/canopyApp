import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getReservations } from "../../store/reservations";
import UserReservations from './UserReservations';
import PreviousActivity from './PreviousActivity';
import { getUserReviews } from "../../store/user";
import ReviewDisplay from "../ListingPage/ReviewDisplay";

import './index.css';



function User() {
  const user = useSelector(state => state.session.user);
  // const info = useSelector(state => state.user.info);
  const reservations = useSelector(state => state.reservations);
  const reviews = useSelector(state => state.user);
  const resArray = Object.values(reservations);
  const revArray = Object.values(reviews);
  const dispatch = useDispatch()


  const { id } = useParams()


  useEffect(() => {
    dispatch(getReservations(id));
    dispatch(getUserReviews(id));
  }, [dispatch, id]);

  const memberSince = () => {
    const joined = new Date(user.createdAt)
    const index = joined.getMonth();
    const year = joined.getFullYear()

    const months = ['January', 'February', 'March',
     'April', 'May', 'June', 'July', 'August',
     'September', 'October', 'November', 'December'];
     return {month: months[index], year}
  }


  if (!user){
    return <Redirect to='/' />
  } else {
  return (
    <div className='userPage_container'>
      <div className='userPage_reservations'>
          <div className='upcomingStays'><h3>Upcoming Stays</h3></div>
          {reservations ? resArray.map(res => {
           return  <UserReservations key={res.id} reservation={res}></UserReservations>
          }) : <div>loading...</div>}
      </div>
      <div className='userPage_userInfo'>
          <h3>Hello, {user.firstName} {user.lastName}</h3>
          <div>
            <div>Account No: {user.id}</div>
            <div>Email: {user.email}</div>
            <div>Joined: {memberSince().month}, {memberSince().year}</div>
            <h4>Here's what you had to say about your previous stays</h4>
            {reviews ? revArray.map(review => {
              return <PreviousActivity key={review.id} review={review}></PreviousActivity>
              }): <div>loading...</div>
            }
          </div>
      </div>
    </div>
  )
}

}

export default User;
