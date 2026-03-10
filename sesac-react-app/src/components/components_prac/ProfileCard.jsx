import React from "react";

const ProfileCard = () => {
  const name = "홍길동";
  const age = 20;
  const job = "대학생";
  const hobbies = ["코딩", "독서", "운동"];
  const introduction = "안녕하세요! 리액트를 공부하고 있는 홍길동입니다.";

  return (
    <div>
      <h2>프로필 카드</h2>
      <p>
        <strong>이름:</strong> {name}
      </p>
      <p>
        <strong>나이:</strong> {age}세
      </p>
      <p>
        <strong>직업:</strong> {job}
      </p>
      <p>
        <strong>취미:</strong> {hobbies[0]}, {hobbies[1]}, {hobbies[2]}
      </p>
      <p>
        <strong>자기소개:</strong> {introduction}
      </p>

      <hr />
    </div>
  );
};

export default ProfileCard;
