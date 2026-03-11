import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "현우",
    age: 22,
  });

  const handleBirthday = () => {
    // 새로운 객체를 만들어서 전달
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div className="card">
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <button className="button" onClick={handleBirthday}>
        생일 축하![클릭하면 나이 증가]
      </button>
    </div>
  );
};

export default Profile;
