import { useState } from "react";
import Form from "./form";
import TodoList from "./todoList";

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);

  console.log("todos in return", todos);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

      {/* {console.log("todos in return", todos)} */}
    </div>
  );
}
