import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";

import Accueil from "./pages/Accueil.tsx";
import Favoris from "./pages/Favoris.tsx";
import FicheGame from "./pages/FicheGame.tsx";

const API_KEY = import.meta.env.VITE_API_KEY;



//router creation
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
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
