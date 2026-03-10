// 이벤트 객체(event)를 인자로 받아 입력값을 로그로 출력하는 핸들러
const ChangeExample = () => {
  const handleChange = (event) => {
    console.log(`입력 이벤트 발생, 입력 값: ${event.target.value}`);
    // 구글 검색의 경우, 입력값에 대해서 추천검색어를 받아와서 보여줘.
  };

  return (
    <div>
      <input
        className="border border-solid"
        type="text"
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

export default ChangeExample;
