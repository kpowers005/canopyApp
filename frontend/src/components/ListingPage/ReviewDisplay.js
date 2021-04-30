import './ReviewDisplay.css'


function ReviewDisplay ({ review }) {

  return (
    <div className='review-container'>
      <p>{review.User.firstName} {review.User.lastName} <span>{review.rating} / 5</span></p>
      <p>{review.body}</p>
    </div>
  )
}
export default ReviewDisplay;
