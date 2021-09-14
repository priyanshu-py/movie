import React, { useState } from 'react'

export default function Searchbar({ parsedData , setParsedData }) {

    const [searchKey, setSearchKey] = useState('')

    const handleOnChange = (event)=>{
        setSearchKey(event.target.value)
        console.log(searchKey)
    }

    const takingMoviesFromApi =  async () =>{
        let url = `http://www.omdbapi.com/?s=${searchKey}&apikey=a95c91f0`;
        let data = await fetch(url);
        let parsedDataFromApi = await data.json()
        setParsedData(parsedDataFromApi.Search);
        console.log('data extracted from api ')        
    }

    return (
        <div>
            <input type="text" value={searchKey} onChange={handleOnChange} className="searchbarCSS" placeholder="Search For a Movie/Series"/>
            <button type="button" onClick={takingMoviesFromApi} className="btn btn-danger mt-2">Search</button>  
        </div>
    )
}
