import React, { useState, useEffect } from "react";

import "../../styles/home.css";

export const RatedTv = () => {
    const [tvRated, setTvRated] = useState(null);
    const getRatedTv = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=e8e57b7e0858da8731d98290e1d6f423", requestOptions)
            .then(response => response.json())
            .then(result => setTvRated(result))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        getRatedTv();
    }, []);


    return (
        <div className="text-center mt-4 d-flex flex-wrap justify-content-around movie">
            {!!tvRated && tvRated.results.map((tv) => (
                <div className="card " key={tv.id} >
                    <img src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} className="card-img-top" alt="..." />
                    <div className="card-body p-0 m-0">
                        <h5 className="card-title p-0 m-0">{tv.name}</h5>
                        <p className="card-text p-0 m-0">Release Year: {tv.first_air_date}</p>
                        <p className="card-text p-0 m-1">Rank: {tv.vote_average}</p>
                        <a href="#" className="btn btn-dark m-0">Go to the tv</a>
                    </div>
                </div>
            ))}
        </div>
    );
};