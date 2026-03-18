import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const Header = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className="card">
      <header>
        <Link to="/auth" className="border">
          홈
        </Link>
        <Link to="/auth/mypage" className="border">
          마이페이지
        </Link>
        {user ? (
          <div>
            <span>{user.email}님</span>
            <button className="button" onClick={logout}>
              로그아웃
            </button>
          </div>
        ) : (
          <div>
            <Link to="/auth/login" className="border">
              로그인
            </Link>
            <Link to="/auth/signup" className="border">
              회원가입
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
