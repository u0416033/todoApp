import { useState } from "react";
import Form from "./form";
import TodoList from "./todoList";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  console.log("todos in return", todos);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

      {/* {console.log("todos in return", todos)} */}
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}

type Todo = {
  name: string;
  done: boolean;
};
