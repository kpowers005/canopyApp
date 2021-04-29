import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviews } from '../../store/reviews'

function ListingPage () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const revObj = useSelector(state => state.reviews);
  const reviews = Object.values(revObj);

  useEffect(() => {
    dispatch(getReviews(id))
  }, [dispatch, id])
  return (
    <main>
      <h1>Hello world</h1>
      <div></div>
      {reviews.map((review => <p key={review.id}>{review.body}</p>))}
    </main>
  )
}

export default ListingPage;
