import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const PopularMovie = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getRatedMovie();
		actions.getPopularMovie();
		actions.getRatedTv();
		actions.getPopularTv();
	}, []);

	return (
		<div className="text-center mt-4 d-flex flex-wrap justify-content-around movie">
			{store.moviePopular?.results?.map((movie) => (
				<div className="card" key={movie.id} >
					<img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} className="card-img-top" alt="..." />
					<div className="card-body p-0 m-0">
						<h5 className="card-title p-0 m-0">{movie.title}</h5>
						<p className="card-text p-0 m-0">Release Year: {movie.release_date}</p>
						<p className="card-text p-0 m-1">Rank: {movie.vote_average}</p>
						<Link to={`/oneMovie/${movie.id}`} className="btn btn-dark m-0">
							Go to the movie
						</Link>
						<button onClick={() => {
							actions.addFav(movie.title, 'Pelicula')
						}}>❤️</button>

					</div>
				</div>
			))}
		</div>
	);
};
