import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
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
