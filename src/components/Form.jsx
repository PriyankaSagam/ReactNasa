import React from 'react'
import { useState } from 'react';
function Form(props) {
    //add state to hold the data of the form
    //The component must return some JSX
    const [searchData, setSearchData] = useState({ searchterm: "", })
     //handleChange - updates formData when we type into form
    const handleChange = (event) => {
         //use the event object to detect key and value to update
        setSearchData({ ...searchData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
         //pass the search term to moviesearch prop (the method that will search)
       props.nasaSearchList(searchData.searchterm);
    }
  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input 
                  type="text"
                  name="searchterm"
                  onChange={handleChange}
                  placeholder='search'
                  value={searchData.searchterm} />
              <input type = "submit" value = "submit"/>
          </form>
          {/* <p>Search:{searchData.searchterm}</p> */}
    </div>
  )
}

export default Form