import { Link } from 'react-router-dom';

function PreviousActivity ({ review }) {
  // console.log(review)
  return (
    <div>
      {review && <div className='userReviews__holder'>
          <div>At <Link to={`/treehouses/${review.treehouseId}`}>{review.Treehouse.title}</Link>:</div>
          <div>{review.body}</div>
      </div>}
    </div>
  )
}


export default PreviousActivity;
