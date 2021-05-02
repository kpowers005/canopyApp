import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteReview, editReview } from '../../store/reviews';
import './ReviewDisplay.css'


function ReviewDisplay ({ user, review }) {

  const [cantEdit, setCantEdit] = useState(true);
  const [newReview, setNewReview] = useState(review.body);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const update = {
      id: review.id,
      body: newReview
    }

    dispatch(editReview(update));
    setCantEdit(true);
  }

  let reviewBody
    if (cantEdit) {
       reviewBody = (<p>{newReview}</p>)
    } else {
       reviewBody = (<form onSubmit={handleSubmit}>
         <textarea type='text' value={newReview} onChange={e => setNewReview(e.target.value)}></textarea>
         <button>Submit</button></form>);
    }



  const remove = (review) => {
    dispatch(deleteReview(review))
  }



  return (
    <div className='review-container'>
      <p>{review.User.firstName} {review.User.lastName} <span>{review.rating} / 5</span></p>
      {reviewBody}
      <button className='edit-button' disabled={user && user.id === review.User.id ? false : true} onClick={() => setCantEdit(!cantEdit)}>Edit</button>
      <button className='delete-button' disabled={user && user.id === review.User.id ? false : true} onClick={() => remove(review)}>Delete</button>
    </div>
  )
}
export default ReviewDisplay;
