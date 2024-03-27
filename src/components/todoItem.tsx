import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }: TodoItemProps) {
  const deleteItem = (item: string) => {
    console.log(`delete ${item}`);
    setTodos(todos.filter((todo) => todo !== item));
  };
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}{" "}
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
  item: string;
  todos: string[];
  setTodos: (todos: string[]) => void;
}
