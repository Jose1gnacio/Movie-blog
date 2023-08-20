import React, { useState, useEffect } from "react";

import "../../styles/home.css";

export const RatedMovie = () => {
    const [movieRated, setMovieRated] = useState(null);
    const getRatedMovie = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e8e57b7e0858da8731d98290e1d6f423", requestOptions)
            .then(response => response.json())
            .then(result => setMovieRated(result))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        getRatedMovie();
    }, []);


    return (
        <div className="text-center mt-4 d-flex flex-wrap justify-content-around movie">
            {!!movieRated && movieRated.results.map((movie) => (
                <div className="card " key={movie.id} >
                    <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="card-img-top" alt="..." />
                    <div className="card-body p-0 m-0">
                        <h5 className="card-title p-0 m-0">{movie.title}</h5>
                        <p className="card-text p-0 m-0">Release Year: {movie.release_date}</p>
                        <p className="card-text p-0 m-1">Rank: {movie.vote_average}</p>
                        <a href="#" className="btn btn-dark m-0">Go to the movie</a>
                    </div>
                </div>
            ))}
        </div>
    );
};




