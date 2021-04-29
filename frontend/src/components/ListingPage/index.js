import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviews } from '../../store/reviews'

function ListingPage () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const revObj = useSelector(state => state.reviews);
  const reviews = Object.values(revObj);
  console.log(reviews, 'allreviews')

  useEffect(() => {
    dispatch(getReviews(id))
  }, [dispatch, id])
  return (
    <body>
      <h1>Hello world</h1>
      {reviews.map((review => <p key={review.id}>{review.body}</p>))}
    </body>
  )
}

export default ListingPage;