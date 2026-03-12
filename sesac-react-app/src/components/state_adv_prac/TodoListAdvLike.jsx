import React from "react";
import { useState } from "react";

const TodoListAdv = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부", liked: false },
    { id: 2, text: "점심 먹기", liked: false },
  ]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, liked: false }]);
    setInput("");
  };

  const handleDelete = (id) => {
    console.log("삭제!");
    console.log(id);
    // todos에서 id에 해당하는 값을 없애는 것.
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggleLike = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, liked: !todo.liked } : todo,
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="card">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input"
      />
      <button className="button" onClick={handleAdd}>
        추가
      </button>{" "}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* 하트 클릭 시 토글 실행 */}
            <span onClick={() => handleToggleLike(todo.id)}>
              {todo.liked ? "❤️" : "🤍"}
            </span>

            {/* 텍스트 클릭 시에도 토글되도록 onClick 추가 */}
            <span onClick={() => handleToggleLike(todo.id)}>{todo.text}</span>

            <button onClick={() => handleDelete(todo.id)} className="button">
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListAdv;
