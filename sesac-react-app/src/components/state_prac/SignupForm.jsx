import { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = () => {
    console.log("이름:", name);
    console.log("이메일:", email);
    console.log("나이:", age);
  };

  return (
    <div className="card">
      <div>
        <input
          type="text"
          className="border border-black"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          className="border border-black"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          className="border border-black"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </div>
      <div>
        <button className="button" onClick={handleSubmit}>
          가입
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
