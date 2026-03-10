import React, { useState } from "react";

const PasswordCheck = () => {
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  return (
    <div className="card">
      <div>PasswordCheck</div>
      <input
        type="password"
        onChange={(e) => setPw(e.target.value)}
        className="input"
        placeholder="비밀번호 입력"
      />
      <input
        type="password"
        onChange={(e) => setPwConfirm(e.target.value)}
        className="input"
        placeholder="비밀번호 한 번 더"
      />
      {(pw || pwConfirm) &&
        (pw === pwConfirm ? (
          <div className="text-green-500">비밀번호가 일치합니다 </div>
        ) : (
          <div className="text-red-500">비밀번호가 일치하지 않습니다 </div>
        ))}
    </div>
  );
};

export default PasswordCheck;
