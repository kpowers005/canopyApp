import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviews } from '../../store/reviews';
import { findTreehouse } from '../../store/treehouses';
import ImageHolder from './ImageHolder';

function ListingPage () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const revObj = useSelector(state => state.reviews);
  const reviews = Object.values(revObj);
  const tree = useSelector(state => state.trees)


  useEffect(() => {
    dispatch(getReviews(id));
    dispatch(findTreehouse(id));
  }, [dispatch, id])
  return (
    <main>
      <h1>Hello world</h1>
      <div>
        <ImageHolder tree={tree}/>
      </div>
      {reviews.map((review => <p key={review.id}>{review.body}</p>))}
    </main>
  )
}

export default ListingPage;
