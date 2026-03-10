// 키보드 입력 이벤트를 처리할 때 사용
// event.key로 어떤 키가 눌렸는지 확인할 수 있음
const KeyDownExample = () => {
  const handleKeyDown = (event) => {
    console.log(event.target.value);

    if (event.key === "Enter") {
      alert(`입력 값: ${event.target.value}`);
    }
  };

  return (
    <div>
      <input
        className="border border-solid"
        type="text"
        placeholder="Enter 키를 눌러보세요"
        onKeyDown={(event) => handleKeyDown(event)}
      />
    </div>
  );
};

export default KeyDownExample;
