import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="flex justify-between mb-5">
        <h1>MyShop</h1>
        <nav>
          <NavLink to="home">홈</NavLink>
          <NavLink to="products">상품</NavLink>
          <NavLink to="cart">장바구니</NavLink>
          <NavLink to="login">로그인</NavLink>
          <NavLink to="signup">회원가입</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="my-5">고객센터: 1234-5678</footer>
    </div>
  );
};

export default Layout;
