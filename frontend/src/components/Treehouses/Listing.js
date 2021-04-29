import { Link } from 'react-router-dom';
import './Listing.css';

function Listing ({ tree }) {

  return (
    <div className='listing-main'>
      <Link className='listing-info' to={`/treehouses/${tree.id}`}>
        <img className='listing-image' alt='' src={tree.image1}/>
        <p className='listing-title' >{tree.title}</p>
        <p>{tree.city}</p>
      </Link>
      <span className='listing-rate'>${tree.rate}/night</span>
    </div>
  )
}

export default Listing;
