const SubmitExample = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // 브라우저의 기본 동작(폼 제출 시 페이지 새로고침)을 막음

    // FormData : form 요소의 입력 값을 쉽게 가져올 수 있는 객체
    const formData = new FormData(event.target);

    // formData.get("name속성값")으로 각 입력 값을 가져온다
    console.log(`이메일 입력 값: ${formData.get("email")}`);
    console.log(`비밀번호 입력 값: ${formData.get("password")}`);
    console.log(`이름 입력 값: ${formData.get("name")}`);
  };

  return (
    <div>
      <form
        className="border border-solid"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div>
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitExample;
