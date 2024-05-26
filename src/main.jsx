import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./assets/layout/Nav.jsx";
import Hero1 from "./assets/layout/Hero1.jsx";
import CardBody from "./assets/pages/CardBody.jsx";
import Footer from "./assets/pages/Footer.jsx";

const Cards = [
  {
    title: "Sepatu",
    Judul: "nbsjhjb",
  },
];

Cards.map(() => {});

const router = createBrowserRouter([
  {
    path: "/index.html",
    _element: (
      <div>
        <Nav />
        <Hero1 />
        <CardBody />
        <Footer />
      </div>
    ),
    get element() {
      return this._element;
    },
    set element(value) {
      this._element = value;
    },
  },
  {
    path: "/Navbar",
    element: <Nav />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
