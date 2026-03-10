import React, { useState } from "react";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`id : ${id} \npw : ${pw}`);

    setId("");
    setPw("");
  };

  return (
    <div className="card">
      <div>LoginForm</div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">
            ID :{" "}
            <input
              type="text"
              className="input"
              onChange={(event) => setId(event.target.value)}
              value={id}
            />
          </label>
        </div>

        <div>
          <label htmlFor="">
            PW :{" "}
            <input
              type="password"
              className="input"
              onChange={(event) => setPw(event.target.value)}
              value={pw}
            />
          </label>
        </div>

        <button className="button">로그인</button>
      </form>
    </div>
  );
};

export default LoginForm;
