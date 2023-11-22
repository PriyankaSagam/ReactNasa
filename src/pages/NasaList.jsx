import React from 'react'
import Form from '../components/Form'
import { useState } from 'react';
import NasaContentDisplay from '../components/NasaContentDisplay'
function NasaList() {
  // const apikey = "3syMhiulsP2EJvwJANFn2FV6KksDhc7VGMJghyU3"
   //create state to hold the movie data
  const [nasa, setNasa] = useState(null);
  
  // // create a function that is given the search term then does the fetch request
  // //    =====                   =====
  // //function getNasa

   const getNasa = async (searchTerm) => {
    const baseUrl = "https://images-api.nasa.gov/";
     // const url = baseUrl + '?' + apikey + '&' + 't=' + searchTerm;
     const url = baseUrl + 'search?q=' + searchTerm;
  //   // make fetch request and store response
     try {
      // fetch with the url, returns the same thing as when i put that url in the address bar
       const response = await fetch(url);
       console.log(url);
       const data = await response.json();
       console.log(data);
       setNasa(data);
     } catch (e) {
       console.log(e);
     }

   }
    
    return ( 
      <div> 
        <br/>
        <Form nasaSearchList={getNasa} />
        <NasaContentDisplay nasa={nasa}/>
    </div>
  )
}

export default NasaList