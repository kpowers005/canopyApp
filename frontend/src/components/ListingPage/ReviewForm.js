import { useReview } from '../../context/ReviewContext';
import { useDispatch } from 'react-redux';
import { addReview } from '../../store/reviews';
import './ReviewForm.css';



function ReviewForm ({ user, tree, render }) {

  const { userReview,
    userRating,
    setUserReview,
    setUserRating,
   } = useReview();

  const dispatch = useDispatch();




  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      userId: user.id,
      treehouseId: tree.id,
      rating: userRating,
      body: userReview
    }
    const completed = await dispatch(addReview(newReview));
    if (completed) {
      setUserReview('');
      setUserRating(0);
        render();
      }
  }



  return (
    <form className='reviewform-form' onSubmit={handleSubmit}>
      <label>
        Rating:
        <input value={userRating} min='1' max='5' type='number' onChange={e => setUserRating(e.target.value)}>
        </input>
      </label>
      <textarea value={userReview} placeholder='write your review here...' onChange={e => setUserReview(e.target.value)}></textarea>
      <button type='submit'> Submit Review</button>
    </form>
  )
}

export default ReviewForm;
