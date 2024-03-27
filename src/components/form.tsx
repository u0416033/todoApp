import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }: FormProps) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
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
  todos: string[];
  setTodos: (todos: string[]) => void;
};
