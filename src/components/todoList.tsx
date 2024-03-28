import TodoItem from "./todoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }: FormProps) {
  const sortedTodos = todos.slice().sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((todo, index) => (
        <TodoItem key={index} item={todo} todos={todos} setTodos={setTodos} />
      ))}{" "}
    </div>
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
