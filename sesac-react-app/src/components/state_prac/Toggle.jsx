// 이벤트 발생 → setter 호출 → State 변경 → 리렌더링
// 클릭 이벤트로 State 변경
import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>상태: {isOn ? "ON" : "OFF"}</p>
      <button className="button" onClick={handleToggle}>
        토글(이벤트 발생 → setter 호출 → State 변경 → 리렌더링)
      </button>
      <button className="button" onClick={() => setIsOn(!isOn)}>
        토글(화살표 함수)
      </button>
    </div>
  );
};

export default Toggle;
