import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import App from "./App.tsx";
import Portfolio_details from "./components/Portfolio_details.tsx";

AOS.init();

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/portfolio-details", element: <Portfolio_details /> },
]);

ReactDom.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
