import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const RatedTv = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getRatedMovie();
        actions.getPopularMovie();
        actions.getRatedTv();
        actions.getPopularTv();
    }, []);


    return (
        <div className="text-center mt-4 d-flex flex-wrap justify-content-around movie">
            {store.ratedTv?.results?.map((tv) => (
                <div className="card " key={tv.id} >
                    <img src={"https://image.tmdb.org/t/p/w500/" + tv.poster_path} className="card-img-top" alt="..." />
                    <div className="card-body p-0 m-0">
                        <h5 className="card-title p-0 m-0">{tv.name}</h5>
                        <p className="card-text p-0 m-0">Release Year: {tv.first_air_date}</p>
                        <p className="card-text p-0 m-1">Rank: {tv.vote_average}</p>
                        <Link to={`/oneTvSerie/${tv.id}`} className="btn btn-dark m-0">
                            Go to the Tv Series
                        </Link>
                        <button
                            onClick={() => {
                                actions.addFav(tv.name, 'Serie')
                            }}>❤️
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};