import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteReview, editReview } from '../../store/reviews';
import { IoLeaf, IoLeafOutline } from "react-icons/io5";
import './ReviewDisplay.css'


function ReviewDisplay ({ user, review }) {

  const [cantEdit, setCantEdit] = useState(true);
  const [newReview, setNewReview] = useState(review.body);
  const [oldReview, setOldReview] = useState(review.body);

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
      setOldReview(newReview)
    }
  }

  let reviewBody
    if (cantEdit) {
       reviewBody = (<p>{oldReview}</p>)
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
      <div className='review-rating'>Overall: {['','','','',''].map((leaf, i) => {
         if (i < review.rating) {
           return leaf = <IoLeaf key={`${i} star`} className='review-icon'/>
         } else {
           return leaf = <IoLeafOutline key={`${i} star`} className='review-icon'/>
         }
        })
      }</div>
      {reviewBody}
      {crud && <div>
      <button className='edit-button' disabled={user && user.id === review.User.id ? false : true} onClick={() => setCantEdit(!cantEdit)}>Edit</button>
      <button className='delete-button' disabled={user && user.id === review.User.id ? false : true} onClick={() => remove(review)}>Delete</button>
      </div>}
    </div>
  )
}
export default ReviewDisplay;
