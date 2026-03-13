import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 1. 초기 로드 및 목록 갱신을 위한 useEffect
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(API_URL);
      // 서버에서 받아온 데이터를 상태에 저장
      setTodos(response.data);
    };

    fetchTodos();
  }, []); // 컴포넌트 마운트 시 1회 실행

  // 2. 할 일 추가 (POST)
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // 서버에서 data["text"]를 사용하므로 키값을 text로 전달
    const response = await axios.post(API_URL, { text: inputValue });
    setTodos([...todos, response.data]);
    setInputValue("");
  };

  // 3. 완료 상태 토글 (PUT .../toggle)
  const handleToggle = async (id) => {
    const response = await axios.put(`${API_URL}/${id}/toggle`);
    // 서버에서 업데이트된 객체를 반환하므로 해당 id만 교체
    setTodos(todos.map((t) => (t.id === id ? response.data : t)));
  };

  // 4. 삭제 (DELETE)
  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    // 삭제 성공 시 화면에서도 필터링
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="card">
      <div className="text-xl font-bold mb-4">Todo List (FastAPI 연동)</div>

      {/* 입력 섹션 */}
      <form onSubmit={handleAddTodo} className="flex mb-6 gap-2">
        <input
          className="border p-2 flex-1 rounded"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="무엇을 해야 하나요?"
        />
        <button
          type="submit"
          className="button bg-blue-500 text-white px-4 py-2 rounded"
        >
          추가
        </button>
      </form>

      {/* 목록 섹션 */}
      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="card flex justify-between items-center p-3 border rounded shadow-sm"
          >
            <div
              onClick={() => handleToggle(todo.id)}
              className={`cursor-pointer ${todo.done ? "line-through text-gray-400" : ""}`}
            >
              {todo.text}
            </div>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 cursor-pointer"
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      {todos.length === 0 && (
        <div className="text-center text-gray-400 py-10">
          데이터가 없습니다.
        </div>
      )}
    </div>
  );
};

export default TodoList;
