import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }: FormProps) {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="add some task ..."
        />
        <button className={styles.modernBTN} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

type FormProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};
type Todo = {
  name: string;
  done: boolean;
};
