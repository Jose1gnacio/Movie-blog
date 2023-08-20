import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
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
						

					</div>
				</div>
			</div>
		</nav>
	);
};
