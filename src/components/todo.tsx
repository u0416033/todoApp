import { useState } from "react";
import TodoItem from "./todoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  console.log("todos in return", todos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTodo(e.target.value)} type="text" value={todo} />
        <button type="submit">Add</button>
      </form>

      {todos.map((todo, index) => (
        <TodoItem key={index} item={todo} />
      ))}
      {/* {console.log("todos in return", todos)} */}
    </div>
  );
}
