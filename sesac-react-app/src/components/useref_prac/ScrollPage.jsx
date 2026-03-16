import { useRef } from "react";

const ScrollPage = () => {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="card">
      <button className="button" onClick={scrollToBottom}>
        맨 아래로 이동(클릭)
      </button>
      <div style={{ height: "200vh" }} />
      <div ref={bottomRef}>여기가 맨 아래입니다</div>
    </div>
  );
};

export default ScrollPage;
