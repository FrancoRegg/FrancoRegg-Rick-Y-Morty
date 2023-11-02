import React from 'react'

const Search = ({search, setSearch}) => {
  
  const handleInputChange = ({target}) =>{
    setSearch(target.value)
  };
 
    return (
    <div className='container search'>
      <form > 
        <input type='text' onChange={handleInputChange} value={search} className='finder-character' placeholder='Look for your character...' />
      </form>
    </div>

  )
}

export default Search
