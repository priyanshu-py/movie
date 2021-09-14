import React from 'react'

export default function Movieitem({image, year, movieName}) {
    return (
        <div className="movieBody">
            <img src={image} alt="movie background" />
            <div className="movieDetails">
                <p>{movieName}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}
