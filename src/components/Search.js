import React from 'react'

const Search = ({search, setSearch}) => {
  

  const handleInputChange = ({target}) =>{
    setSearch(target.value)
  };
  /*const handleSubmit = (e) => {
    e.preventDeFault();
    console.log("AQUI SEARCH",search);
  };*/


    return (
    <div>
      <form > 
        <input type='text' onChange={handleInputChange} value={search} className='form-control' placeholder='Search' />
      </form>
      <button type='submit'> buscar</button>
    </div>

  )
}

export default Search
