import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importa useParams desde React Router

export const OneTvSerie = () => {
    const { tvid } = useParams() // Obtiene el ID de la película desde la URL
    const [tvDetails, setTvDetails] = useState([]);

    // Luego, puedes usar el ID de la película para cargar los detalles de esa película
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${tvid}?api_key=e8e57b7e0858da8731d98290e1d6f423`)
            .then(response => response.json())
            .then(result => setTvDetails(result))
            .catch(error => console.log('error', error));
    }, [tvid]);

    return (
        <div>
            <h1>{tvDetails.name}</h1> {/* Corregido para usar "name" en lugar de "title" */}
            <img src={`https://image.tmdb.org/t/p/w500/${tvDetails.poster_path}`} alt={tvDetails.name} /> {/* Corregido para usar "name" en lugar de "title" */}
            <p>First Air Date: {tvDetails.first_air_date}</p> {/* Corregido para usar "first_air_date" en lugar de "release_date" */}
            <p>Vote Average: {tvDetails.vote_average}</p>
            <p>Overview: {tvDetails.overview}</p>
        </div>
    );
};
