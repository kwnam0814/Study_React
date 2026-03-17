import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="card">
      <h1>오류가 발생했습니다</h1>
      <p>{error.statusText || error.message}</p>
      <Link to="/" className="button">
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default ErrorPage;
