// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts_prob/Layout";
import Home from "../pages_prob/Home";
import Products from "../pages_prob/Products";
import Cart from "../pages_prob/Cart";
import Login from "../pages_prob/Login";
import SignUp from "../pages_prob/SignUp";
import SimpleLayout from "../pages_prob/SimpleLayout";

const router = createBrowserRouter([
  {
    path: "/layout-prob",
    element: <SimpleLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

export default router;
