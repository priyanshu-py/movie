
import background from '../b.jpg'
import React from 'react'
import Searchbar from './Searchbar'

export default function Homepage({ parsedData , setParsedData }) {
    return (
        <div className="homepageCustomCSS bg-dark">

        <div className="contentCSS">
            <h1 className="heading">One Click <br/> <strong>Download</strong></h1>
            <p className="para">
                Only platform where you can Download movies and webseries in one click only.<br/> Shocked? Try to find a movie here....
            </p>
            <Searchbar parsedData={parsedData} setParsedData={setParsedData}/>
        </div>

        <div className="imageCSS">
            <div className="gradient"></div>
            <img src={background} alt="background" />
        </div>

    
    </div>
    )
}

    
