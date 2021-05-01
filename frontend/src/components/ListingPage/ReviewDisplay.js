import { useDispatch } from 'react-redux';
import { deleteReview } from '../../store/reviews';
import './ReviewDisplay.css'


function ReviewDisplay ({ user, review }) {

  const dispatch = useDispatch();

  const remove = (review) => {
    dispatch(deleteReview(review))
  }


  return (
    <div className='review-container'>
      <p>{review.User.firstName} {review.User.lastName} <span>{review.rating} / 5</span></p>
      <p>{review.body}</p>
      <button className='edit-button' disabled={user && user.id === review.User.id ? false : true}>Edit</button>
      <button className='delete-button' disabled={user && user.id === review.User.id ? false : true} onClick={() => remove(review)}>Delete</button>
    </div>
  )
}
export default ReviewDisplay;
