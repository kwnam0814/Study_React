import React, { useState, useEffect } from "react";

function UseEffectCount() {
  // 1. 카운트 상태 설정 (기본값: 0)
  const [count, setCount] = useState(0);

  // 2. 컴포넌트 마운트 시 최초 1회만 실행
  useEffect(() => {
    console.log("앱이 시작되었습니다!");
  }, []); // 빈 배열([])을 넣으면 업데이트 시에는 실행되지 않습니다.

  return (
    <div className="card">
      <h1>카운터: {count}</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        +1 버튼
      </button>
    </div>
  );
}

export default UseEffectCount;
