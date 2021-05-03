import { Link } from 'react-router-dom';
import { IoLeaf } from "react-icons/io5";
import './Listing.css';

function Listing ({ tree }) {

  return (
    <div className='listing-main'>
      <Link className='listing-info' to={`/treehouses/${tree.id}`}>
        <img className='listing-image' alt='' src={tree.image1}/>
        <div className='listing-description'>
          <p className='listing-title' >{tree.title}</p>
          <p className='listing-minor--details'>{tree.city}, {tree.state}</p>
          <IoLeaf />
        </div>
      </Link>
      <span className='listing-rate'>${tree.rate}/night</span>
    </div>
  )
}

export default Listing;
