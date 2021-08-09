import './index.css'
import { Link } from 'react-router-dom';


function HomePage () {


  return (
      <main>
        <div>
            <div className='splashy'>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='wood__paneling'></div>
              <div className='frame__holder'>
                <div className='frame__strings'><div className='nail'></div></div>
                <div className='pictureFrame'>
                  <Link to='/treehouses'>
                  <h1 className='splashy-title'>Explore the World like never before</h1>
                  <span className='splashy-title--info'>(click here to see treehouse stays)</span>
                  </Link>
                </div>
                <img className='splashy-image' alt='outdoors' src='https://canopyappkp.s3.us-east-2.amazonaws.com/wp2085681.jpg'></img>
              </div>
              {/* {!user && <button onClick={() => login()}>Try My Site!</button>} */}
            </div>
        </div>
      </main>
  )
}


export default HomePage;
