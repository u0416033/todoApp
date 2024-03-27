import TodoItem from "./todoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }: FormProps) {
  return (
    <div className={styles.list}>
      {todos.map((todo, index) => (
        <TodoItem key={index} item={todo} todos={todos} setTodos={setTodos} />
      ))}{" "}
    </div>
  );
}

type FormProps = {
  todos: string[];
  setTodos: (todos: string[]) => void;
};
