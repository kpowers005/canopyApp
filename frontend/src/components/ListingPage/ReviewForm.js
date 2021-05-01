import { useReview } from '../../context/ReviewContext';
import { useDispatch } from 'react-redux';
import { addReview } from '../../store/reviews';



function ReviewForm ({ user, tree, render }) {

  const { userReview, userRating, setUserReview, setUserRating} = useReview();

  const dispatch = useDispatch();




    const handleSubmit = async (e) => {
      e.preventDefault();
      const newReview = {
        userId: user.id,
        treehouseId: tree.id,
        rating: userRating,
        body: userReview
      }

      await dispatch(addReview(newReview));

        setUserReview('');
        setUserRating(0);
        render();
    }



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rating
        <input value={userRating} type='number' onChange={e => setUserRating(e.target.value)}>
        </input>
      </label>
      <textarea value={userReview} placeholder='write your review here...' onChange={e => setUserReview(e.target.value)}></textarea>
      <button type='submit'> Submit Review</button>
    </form>
  )
}

export default ReviewForm;
