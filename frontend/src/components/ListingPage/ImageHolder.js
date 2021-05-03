import './ImageHolder.css';

function ImageHolder ({ tree }) {
  return (
    <>
      <div className='imageholder-container'>
        <img alt='' className='imageholder-main'src={tree.image1}></img>
        <img alt='' className='imageholder-minor image2'src={tree.image2}></img>
        <img alt='' className='imageholder-minor image3'src={tree.image3}></img>
        <img alt='' className='imageholder-minor image4'src={tree.image4}></img>
        <img alt='' className='imageholder-minor image5'src={tree.image5}></img>
      </div>
      <div className='imageholder-rate'>${tree.rate}/night</div>
      <div className='imageholder-description'>{tree.description}</div>
    </>
  )
}


export default ImageHolder;
