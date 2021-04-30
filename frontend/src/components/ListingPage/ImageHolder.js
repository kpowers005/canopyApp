import './ImageHolder.css';

function ImageHolder ({ tree }) {
  return (
    <div className='imageholder-container'>
      <img alt='' className='imageholder-main'src={tree.image1}></img>
      <img alt='' className='imageholder-minor'src={tree.image2}></img>
      <img alt='' className='imageholder-minor'src={tree.image3}></img>
      <img alt='' className='imageholder-minor'src={tree.image4}></img>
      <img alt='' className='imageholder-minor'src={tree.image5}></img>
    </div>
  )
}


export default ImageHolder;
