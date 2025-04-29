import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carousels from "../components/Carousels";
import "../App.css";
import styles from "./styles/cardGame.module.css";
import React, { useState, useEffect } from "react";
import { Genre } from "../types/genre";

function Accueil() {
	const [games, setGames] = useState({});
	const API_KEY = import.meta.env.VITE_API_KEY;

	const url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1950-01-01,2000-12-31&page_size=20&ordering=released&genres=`;

	useEffect(() => {
		const fetchGames = async (genre) => {
			try {
				const response = await fetch(`${url}${genre}`);
				const data = await response.json();
				setGames((prevGames) => ({
					...prevGames,
					[genre]: data.results.slice(0, 20), // Prendre les 5 premiers jeux
				}));
			} catch (error) {
				console.error(
					`Erreur lors de la récupération des données pour ${genre}:`,
					error,
				);
			}
		};

		// Fetch games for each genre
		for (const genre in Genre) {
			fetchGames(Genre[genre as keyof typeof Genre]);
		}
	}, []);

	return (
		<div className="mainContainer">
			<Navbar />
			{Object.values(Genre).map((genre) => (
				<section key={genre}>
					<h2 className="genretitle">
						{genre.charAt(0).toUpperCase() + genre.slice(1)}
					</h2>
					<Carousels games={games[genre]} />
				</section>
			))}
			<Footer />
		</div>
	);
}

export default Accueil;
