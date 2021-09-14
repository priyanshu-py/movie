import React from 'react'

export default function Movieitem({image, year, movieName}) {
    return (
        <div className="movieBody">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="movie background" />
            <div className="movieDetails">
                <p>{movieName}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}
