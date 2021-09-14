import React, { useState } from 'react'

export default function Searchbar({ parsedData , setParsedData }) {

    const [searchKey, setSearchKey] = useState('')

    const handleOnChange = (event)=>{
        setSearchKey(event.target.value)
        console.log(searchKey)
    }

    const takingMoviesFromApi =  async () =>{
        let url = `https://api.themoviedb.org/3/search/movie?api_key=31748a6a43ef527e0b309f13191b40eb&query=${searchKey.split(' ').join('+')}`;
        let data = await fetch(url);
        let parsedDataFromApi = await data.json()
        setParsedData(parsedDataFromApi.results);
        console.log(parsedDataFromApi)        

    }

    return (
        <div>
            <input type="text" value={searchKey} onChange={handleOnChange} className="searchbarCSS" placeholder="Search For a Movie/Series"/>
            <button type="button" onClick={takingMoviesFromApi} className="btn btn-danger mt-2">Search</button>  
        </div>
    )
}
