import React, { useState, useEffect } from "react";

function TitleChanger() {
  const [name, setName] = useState("");

  // name 상태가 변경될 때마다 이 효과가 실행됩니다.
  useEffect(() => {
    document.title = name ? name : "";
  }, [name]); // [name]을 넣어줌으로써 name이 바뀔 때마다 실행되도록 설정

  return (
    <div className="card">
      <h2>이름을 입력하세요</h2>
      <input
        type="text"
        placeholder="이름 입력..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>현재 입력된 이름: {name}</p>
    </div>
  );
}

export default TitleChanger;
