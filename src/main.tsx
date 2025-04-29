import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";

import Accueil from "./pages/Accueil.tsx";
import Favoris from "./pages/Favoris.tsx";
import FicheGame from "./pages/FicheGame.tsx";

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
      },
    ],
  },
]);

// rendering
const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
