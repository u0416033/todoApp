export default function TodoItem({ item }: TodoItemProps) {
  return <h3>{item}</h3>;
}
interface TodoItemProps {
  item: string;
}
