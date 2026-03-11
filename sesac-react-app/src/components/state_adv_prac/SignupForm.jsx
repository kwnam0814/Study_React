import { useState } from "react";

const SignupForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
    alert(JSON.stringify(form));
  };

  return (
    <div className="card">
      <input
        name="name"
        placeholder="이름을 입력하시오"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="이메일을 입력하시오"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="age"
        placeholder="나이를 입력하시오"
        value={form.age}
        onChange={handleChange}
      />
      <button className="button" onClick={handleSubmit}>
        가입
      </button>
    </div>
  );
};

export default SignupForm;
