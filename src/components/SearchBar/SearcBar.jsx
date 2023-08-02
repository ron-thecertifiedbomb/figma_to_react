import React from 'react'
import './SearchBar.css'
import Search from '../../assets/search.png'

const SearcBar = () => {
  return (
    <div className='search-bar-wrapper'>
        <div className='icon-search'>
<img src={Search} alt='search'></img>
<h1>Type Here</h1>
        </div>
        
        </div>
  )
}

export default SearcBar