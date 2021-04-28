import './SearchBar.css'

function SearchBar () {
  return (
    <div className='searchbar'>
      <nav>
        {/* <form className= 'searchbar-form'> */}
          <input className='searchbar-input' placeholder='Where are you going...'></input>
          <input className='searchbar-input' placeholder='Check in'></input>
          <input className='searchbar-input' placeholder= 'Check out'></input>
          <button className='searchbar-button'>Search</button>
        {/* </form> */}
      </nav>
    </div>
  )
}

export default SearchBar;
