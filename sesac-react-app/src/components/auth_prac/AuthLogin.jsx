import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const AuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/auth");
    } catch (err) {
      setError(err.response?.data?.detail || "로그인 실패");
    }
  };

  return (
    <div className="card">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <input
          className="border"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="button" type="submit">
          로그인
        </button>
      </form>
    </div>
  );
};

export default AuthLogin;
