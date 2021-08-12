import { Link } from 'react-router-dom';

function PreviousActivity ({ review }) {
  const styles = {
    'margin' : '10px 0px'
  }
  return (
    <div style={styles}>
      {review && <div className='userReviews__holder'>
          <div>At <Link to={`/treehouses/${review.treehouseId}`}>{review.Treehouse.title}</Link>:</div>
          <div>{review.body}</div>
      </div>}
    </div>
  )
}


export default PreviousActivity;
