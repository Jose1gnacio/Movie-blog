import React, { useEffect, useState } from "react";




export const Home = () => {



	return (
		<div className="text-center mt-5 d-flex justify-content-around cinema">
			<div id="carouselExample" className="carousel slide">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<iframe width="640" height="360" src="https://www.youtube.com/embed/VFLkMDEO-Xc" title="Breaking Bad | Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
					<div className="carousel-item">
						<iframe width="640" height="360" src="https://www.youtube.com/embed/MVvGSBKV504" title="OPPENHEIMER - Tráiler Oficial - Subtitulado - (Universal Studios) - HD" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
					<div className="carousel-item">
						<iframe width="640" height="360" src="https://www.youtube.com/embed/NjMJwewmcfA" title="NAPOLEÓN | Tráiler Oficial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>


	);
};

