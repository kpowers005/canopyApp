import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getReservations } from "../../store/reservations";

function User() {
  const user = useSelector(state => state.session.user);
  const reservations = useSelector(state => state.reservations);
  const dispatch = useDispatch()
  console.log(reservations)
  useEffect(() => {
    dispatch(getReservations(user))
  }, [user])

  if (!user){
    return <Redirect to='/' />
  }
  return (
    <div>
      Hello world
    </div>
  )
}



export default User;
