import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteReview, editReview } from '../../store/reviews';
import { IoLeaf } from "react-icons/io5";
import './ReviewDisplay.css'


function ReviewDisplay ({ user, review }) {

  const [cantEdit, setCantEdit] = useState(true);
  const [newReview, setNewReview] = useState(review.body);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const update = {
      id: review.id,
      body: newReview
    }

    const completed = await dispatch(editReview(update));
    if (completed) {
      setCantEdit(true);

    }
  }

  let reviewBody
    if (cantEdit) {
       reviewBody = (<p>{newReview}</p>)
    } else {
       reviewBody = (<form onSubmit={handleSubmit}>
         <textarea type='text' value={newReview} onChange={e => setNewReview(e.target.value)}></textarea>
         <button>Submit</button></form>);
    }

    let crud
    if (!user) {
      crud = false;
    } else if (user.id === review.User.id) {
      crud = true;
    }




  const remove = (review) => {
    dispatch(deleteReview(review))
  }



  return (
    <div className='review-container'>
      <div className='review-user'>{review.User.firstName} {review.User.lastName}</div>
      <span className='review-rating'>overall: {review.rating} / 5 <IoLeaf className='review-icon'></IoLeaf></span>
      {reviewBody}
      {crud && <span>
      <button className='edit-button' disabled={user && user.id === review.User.id ? false : true} onClick={() => setCantEdit(!cantEdit)}>Edit</button>
      <button className='delete-button' disabled={user && user.id === review.User.id ? false : true} onClick={() => remove(review)}>Delete</button>
      </span>}
    </div>
  )
}
export default ReviewDisplay;
