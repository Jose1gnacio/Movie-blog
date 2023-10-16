import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams desde React Router

export const OneMovie = () => {
    const { movieid } = useParams() // Obtiene el ID de la película desde la URL
    const [movieDetails, setMovieDetails] = useState([]);

    // Luego, puedes usar el ID de la película para cargar los detalles de esa película
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=e8e57b7e0858da8731d98290e1d6f423`)
            .then(response => response.json())
            .then(result => setMovieDetails(result))
            .catch(error => console.log('error', error));
    }, [movieid]);

    return (
        <div>
            <h1>{movieDetails.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
            <p>Release Year: {movieDetails.release_date}</p>
            <p>Rank: {movieDetails.vote_average}</p>
            <p>Overview: {movieDetails.overview}</p>
        </div>
    );
};
