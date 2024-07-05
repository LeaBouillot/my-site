import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Resume from './pages/Resume.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import { createBrowserRouter, RouterProvider } from'react-router-dom';

const router = createBrowserRouter([
  { path: "/",
    element: <Home />,
  },
  { path: "/about",
    element: <About />,
  },
  { path: "/resume",
    element: <Resume />,
  },
  { path: "/portfolio",
    element: <Portfolio />,
  },
  { path: "/services",
    element: <Services />,
  },
  { path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
