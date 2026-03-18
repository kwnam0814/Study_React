import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const AuthLayout = () => (
  <div className="card">
    <Header />
    <Outlet />
  </div>
);

export default AuthLayout;
