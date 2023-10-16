import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand"><img src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-movie-board-icon-image_1455346.jpg" loading="lazy" alt="Cheat Code Design Logo" className="nav-logo logo" /></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link to="/ratedMovie" className="nav-link active">Rated Movies</Link>
						<Link to="/popularMovie" className="nav-link active">Popular Movies</Link>
						<Link to="/ratedTv" className="nav-link active">Rated Tv Series</Link>
						<Link to="/popularTv" className="nav-link active">Popular Tv Series</Link>

						<div className="btn-group">
							<button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu">
								{store.fav?.map((obj, i) => (
									<li key={i}><a className="dropdown-item" href="#">{obj.tipo}: {obj.titulo}</a></li>
								))}
								<li><hr className="dropdown-divider" /></li>
								<li><a className="dropdown-item" href="#">Separated link</a></li>
							</ul>

						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
