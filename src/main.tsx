import { StrictMode } from 'react'

import ReactDOM from "react-dom/client";
import { createBrowserRouter,Link,RouterProvider } from 'react-router';
import App from './App.tsx'
import './index.css'

import Accueil from './pages/Accueil.tsx';
import Favoris from './pages/Favoris.tsx';

//router creation
const router = createBrowserRouter([
    { 
        path: "/",
        element: (  
            <>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/">Favoris</Link>
            </nav>
            <main>
            <Accueil />
            </main>
            </>
        ),
    },
    {
      path: "/Favoris",
      element: (
        <>
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Favoris">Favoris</Link>
          </nav>
          <main>
            <Favoris />
          </main>
        </>
      ),
    },
  ]);
  
  // rendering
  
  const rootElement = document.getElementById("root");
  
  if (rootElement != null) {
    ReactDOM.createRoot(rootElement).render(
      <RouterProvider router={router} />
    );
  }