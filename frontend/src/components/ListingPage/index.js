import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getReviews } from '../../store/reviews';
import { findTreehouse } from '../../store/treehouses';
import ImageHolder from './ImageHolder';
import BookingForm from './BookingForm';
import ReviewDisplay from './ReviewDisplay';
import ReviewForm from './ReviewForm';


function ListingPage () {
  const { id } = useParams();
  const dispatch = useDispatch();

  const revObj = useSelector(state => state.reviews);
  const tree = useSelector(state => state.trees);
  const session = useSelector(state => state.session);
  const reviews = Object.values(revObj);
  const [canReview, setCanReview] = useState(true);
  const [renderForm, setRenderForm] = useState(false);


  useEffect(() => {
    dispatch(getReviews(id));
    dispatch(findTreehouse(id));

    if(!session) setCanReview(false);

  }, [dispatch, id, session])

  return (
    <main>
      <h1>{tree.title}</h1>
      <div>
        <ImageHolder tree={tree}/>
      </div>
      <div>
      <h3>Reviews <button disabled={canReview} onClick={() => setRenderForm(true)}>Leave a Review</button></h3>
        {renderForm && <ReviewForm />}
        {reviews.map((review => <ReviewDisplay key={review.id} review={review}/>))}
      </div>
      <div>
        <BookingForm />
      </div>

    </main>
  )
}

export default ListingPage;
