import React from "react";
import useAuthStore from "../../store/useAuthStore";

const AuthMyPage = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="card">
      <h1>마이페이지</h1>
      <p>이메일: {user?.email}</p>
    </div>
  );
};

export default AuthMyPage;
