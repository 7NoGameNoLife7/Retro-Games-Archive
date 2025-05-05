import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";

import Accueil from "./pages/Accueil.tsx";
import Favoris from "./pages/Favoris.tsx";
import FicheGame from "./pages/FicheGame.tsx";
import { Genre } from "./types/genre.ts";

const API_KEY = import.meta.env.VITE_API_KEY;

// const url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=1950-01-01,2000-12-31&page_size=20&ordering=released&genres=`;
// const fetchGameList = async (genre:Genre) => {
//   try{
//     const response = await fetch(`${url}${genre}`);
//     return await response.json();
//    }
//    catch (error) {
//         console.error(
//           `Erreur lors de la récupération des données pour ${genre}:`,
//           error
//         );
//       }
// }
//router creation
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
        // loader: fetchGameList
      },
      {
        path: "/favoris",
        element: <Favoris />,
      },
      {
        path: "/game-details/:id",
        element: <FicheGame />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://api.rawg.io/api/games/${params.id}?key=${API_KEY}`
          );
          return response.json();
        },
      },
    ],
  },
]);

// rendering
const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
