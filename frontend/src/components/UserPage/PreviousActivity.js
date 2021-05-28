import { Link } from "react-router-dom";

function PreviousActivity ({ review }) {
  return (
    <div>
        <img className='userReservations_img' alt='treehouse' src={review.Treehouse.image1}></img>
    </div>
  )
}


export default PreviousActivity;
