// src/router/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages_prac/Home";
import About from "../pages_prac/About";
import Contact from "../pages_prac/Contact";
import Layout from "../layouts_prac/Layout";
import LoginPage from "../pages_prac/LoginPage";
import MyPage from "../pages_prac/MyPage";

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
    ],
  },
  // { path: "layout-prob", element: <component></component> },
]);

export default router;
