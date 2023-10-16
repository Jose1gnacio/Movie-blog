const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			movieRated: [],
			moviePopular: [],
			ratedTv: [],
			tvPopular: [],
			fav: [],
		},
		actions: {

			getPopularMovie: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8e57b7e0858da8731d98290e1d6f423", requestOptions)
					.then(response => response.json())
					.then(result => {
						if (Array.isArray(result.results)) {
							setStore({ moviePopular: result });
						} else {
							console.error("API response is not an array:", result);
						}
					})
					.catch(error => console.log('error', error));
			},

			getRatedMovie: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e8e57b7e0858da8731d98290e1d6f423", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ movieRated: result }))
					.catch(error => console.log('error', error));
			},
			getRatedTv: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=e8e57b7e0858da8731d98290e1d6f423", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ ratedTv: result }))
					.catch(error => console.log('error', error));
			},
			getPopularTv: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				fetch("https://api.themoviedb.org/3/tv/popular?api_key=e8e57b7e0858da8731d98290e1d6f423", requestOptions)
					.then(response => response.json())
					.then(result => setStore({ popularTv: result }))
					.catch(error => console.log('error', error));
			},
			addFav: (title, type) => {
				const store = getStore();

				// Verificar si el título ya existe en la lista de favoritos
				const existingFav = store.fav.find(item => item.titulo === title);

				if (!existingFav) {
					setStore({ fav: [...store.fav, { tipo: type, titulo: title }] });
				} else {
					console.log("Ya agregado");
				}
			},

			addFav2: (title, type) => {
				const store = getStore();
				if (store.fav.length == 0) {
					setStore({ fav: [...store.fav, { tipo: type, itulo: title }] })
				}
				else {
					store.fav?.forEach((element) => {
						if (element.titulo == title) {
							console.log("ya agregado")
						}
						else {
							setStore({ fav: [...store.fav, { tipo: type, titulo: title }] })
						}
					});
				}
			},






		}
	};
};

export default getState;
