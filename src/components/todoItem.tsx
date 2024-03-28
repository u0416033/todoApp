import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }: TodoItemProps) {
  const deleteItem = (item: Todo) => {
    console.log(`delete ${item}`);
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleClick = (name: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.name === name) {
        if (todo.done) {
          className = "";

          return { ...todo, done: false };
        } else {
          return { ...todo, done: true };
        }
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  let className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {" "}
          {item.name}
        </span>
        <span>
          <button onClick={() => deleteItem(item)} className={styles.deleteBTN}>
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
interface TodoItemProps {
  item: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}
type Todo = {
  name: string;
  done: boolean;
};
