import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos.context";
import TodoItem from "./TodoItem";
import styles from "./Todos.module.css";
const Todos: React.FC = (props) => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {ctx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={ctx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
//item?: string[]. ?===optional
//another way to create the component with typescript
// export default function Todos(props: { item: string[],children: }) {
//   return <ul>{props.children}</ul>;
// }
export default Todos;
