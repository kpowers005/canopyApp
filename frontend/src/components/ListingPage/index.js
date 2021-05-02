import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getReviews } from '../../store/reviews';
import { findTreehouse } from '../../store/treehouses';
import ImageHolder from './ImageHolder';
import BookingForm from './BookingForm';
import ReviewDisplay from './ReviewDisplay';
import ReviewForm from './ReviewForm';
import {useReview} from '../../context/ReviewContext';
import './ListingPage.css'


function ListingPage () {

  const { id } = useParams();
  const dispatch = useDispatch();


  const revObj = useSelector(state => state.reviews);
  const tree = useSelector(state => state.trees);
  const {user} = useSelector(state => state.session);
  const reviews = Object.values(revObj);
  const {canReview, setCanReview, renderForm, setRenderForm} = useReview();



  useEffect(() => {
    dispatch(getReviews(id));
    dispatch(findTreehouse(id));

    if(!user) {
      setCanReview(true);
    } else if (user) {
      setCanReview(false);
    }

  }, [dispatch, id, user])

  return (
    <main className='listingpage-container'>
      <h1 className='listingpage-title'>{tree.title}</h1>
      <div className='listingpage-images'>
        <ImageHolder tree={tree}/>
        <BookingForm user={user} tree={tree}/>
      </div>
      <div>
      <h3 className='listingpage-reviews--header'>
        Reviews
      <button className='listingpage-reviews--button' disabled={canReview} onClick={() => setRenderForm(!renderForm)}>Leave a Review</button>
      </h3>
        {renderForm && <ReviewForm render={() => setRenderForm(false)}user={user} tree={tree}/>}
        {reviews.map((review => (<ReviewDisplay key={review.id} review={review} user={user}></ReviewDisplay>)))}
      </div>
      <div>

      </div>

    </main>
  )
}

export default ListingPage;
