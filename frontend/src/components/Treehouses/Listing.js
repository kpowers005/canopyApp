import { Link } from 'react-router-dom';

function Listing ({ tree }) {

  return (
    <div>
      <Link to={`/treehouses/${tree.id}`}>
        <img alt='' src={tree.image1}/>
        <p>{tree.title}</p>
      </Link>
      <span>${tree.rate}/night</span>
    </div>
  )
}

export default Listing;
