import { useReview } from '../../context/ReviewContext';
import { useDispatch, useSelector } from 'react-redux';


function ReviewForm () {

  const { userReview, userRating, setUserReview, setUserRating } = useReview();
  // const
  const dispatch = useDispatch();


  const handleSubmit = async(e) => {
    e.preventDefault();
    const newReview = {

    }

  }

  return (
    <form>
      <label>
        Rating
        <input value={userRating} type='number' onChange={e => setUserRating(e.target.value)}>
        </input>
      </label>
      <textarea value={userReview} placeholder='write your review here...' onChange={e => setUserReview(e.target.value)}></textarea>
      <button type='submit' onSubmit={handleSubmit}></button>
    </form>
  )
}

export default ReviewForm;
