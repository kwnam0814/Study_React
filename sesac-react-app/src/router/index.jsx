// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages_prac/Home";
import About from "../pages_prac/About";
import Contact from "../pages_prac/Contact";
import Layout from "../layouts/Layout";
import LoginPage from "../pages_prac/LoginPage";
import MyPage from "../pages_prac/MyPage";
import ShopLayout from "../pages_prob/ShopLayout";
import ShopHome from "../pages_prob/ShopHome";
import ShopProducts from "../pages_prob/ShopProducts";
import ShopCart from "../pages_prob/ShopCart";
import ShopLogin from "../pages_prob/ShopLogin";
import ShopSignUp from "../pages_prob/ShopSignUp";
import ShopSimpleLayout from "../pages_prob/ShopSimpleLayout";
import PostList from "../url_data_prac/PostList";
import PostDetail from "../url_data_prac/PostDetail";
import ProductList from "../url_data_prac/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      { path: "mypage", element: <MyPage /> },
      {
        path: "posts",
        element: <PostList />,
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
    ],
  },
  {
    path: "/layout-prob",
    element: <ShopLayout />,
    children: [
      { path: "home", element: <ShopHome /> },
      { path: "products", element: <ShopProducts /> },
      { path: "cart", element: <ShopCart /> },
    ],
  },
  {
    path: "/layout-prob",
    element: <ShopSimpleLayout />,
    children: [
      { path: "login", element: <ShopLogin /> },
      { path: "signup", element: <ShopSignUp /> },
    ],
  },
]);

export default router;
